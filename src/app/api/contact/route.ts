import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema, ContactApiResponse } from "@/types/contact";
import { sendContactEmails, generateReferenceId } from "@/lib/ses";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const maxRequests = 5;
  const existing = rateLimitMap.get(ip);
  if (!existing || now > existing.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (existing.count >= maxRequests) return false;
  existing.count++;
  return true;
}

export async function POST(req: NextRequest): Promise<NextResponse<ContactApiResponse>> {
  if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY || !process.env.ADMIN_EMAIL) {
    return NextResponse.json({ success: false, message: "Server configuration error. Please contact us directly.", error: "CONFIG_ERROR" }, { status: 500 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ success: false, message: "Too many requests. Please try again in 15 minutes.", error: "RATE_LIMIT" }, { status: 429 });
  }

  let body: unknown;
  try { body = await req.json(); } catch {
    return NextResponse.json({ success: false, message: "Invalid request format.", error: "PARSE_ERROR" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    const firstError = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return NextResponse.json({ success: false, message: firstError || "Validation failed.", error: "VALIDATION_ERROR" }, { status: 422 });
  }

  const data = parsed.data;
  const referenceId = generateReferenceId();

  try {
    const { adminSent, confirmationSent } = await sendContactEmails(data, referenceId);

    // At least one email succeeded — treat as success
    if (adminSent || confirmationSent) {
      console.log(`[Contact] Ref: ${referenceId} | From: ${data.email} | Admin: ${adminSent} | Confirm: ${confirmationSent}`);
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully. We'll be in touch within 24-48 hours.",
        referenceId,
      });
    }

    // Both failed
    console.error(`[Contact] Both emails failed for ${data.email} (${referenceId})`);
    return NextResponse.json({
      success: false,
      message: "Failed to send your message. Please try again or call us at +91-7206317456.",
      error: "SEND_ERROR",
    }, { status: 500 });

  } catch (error) {
    const err = error as Error & { Code?: string };
    console.error(`[Contact] Unexpected error: ${err.name} | ${err.Code} | ${err.message}`);
    return NextResponse.json({
      success: false,
      message: "An unexpected error occurred. Please call us at +91-7206317456.",
      error: "UNEXPECTED_ERROR",
    }, { status: 500 });
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
