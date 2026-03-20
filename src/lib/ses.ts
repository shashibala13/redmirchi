import {
  SESClient,
  SendEmailCommand,
  SendEmailCommandInput,
} from "@aws-sdk/client-ses";
import { ContactFormData } from "@/types/contact";

const sesClient = new SESClient({
  region: process.env.AWS_REGION || "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export function generateReferenceId(): string {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `RMA-${ts}-${rand}`;
}

function buildAdminHtml(data: ContactFormData, refId: string): string {
  const now = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const phoneRow = data.phone
    ? `<tr><td style="padding:7px 0;font-size:12px;color:#7a6f65;font-weight:600;text-transform:uppercase;width:120px;">Phone</td><td style="padding:7px 0;font-size:14px;color:#1a160e;"><a href="tel:${data.phone}" style="color:#1a160e;text-decoration:none;">${data.phone}</a></td></tr>`
    : "";

  const orgRow = data.organisation
    ? `<tr><td style="padding:7px 0;font-size:12px;color:#7a6f65;font-weight:600;text-transform:uppercase;">Organisation</td><td style="padding:7px 0;font-size:14px;color:#1a160e;">${data.organisation}</td></tr>`
    : "";

  const sourceRow = data.source
    ? `<tr><td style="padding:7px 0;font-size:12px;color:#7a6f65;font-weight:600;text-transform:uppercase;">Source</td><td style="padding:7px 0;font-size:14px;color:#1a160e;">${data.source}</td></tr>`
    : "";

  const callBtn = data.phone
    ? `<a href="tel:${data.phone}" style="display:inline-block;background:#2d7a3a;color:#ffffff;padding:10px 22px;border-radius:50px;font-size:13px;font-weight:700;text-decoration:none;margin-left:8px;">Call Now</a>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>New Enquiry</title></head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background:#f2ede4;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f2ede4;padding:28px 0;">
<tr><td align="center">
<table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
  <tr><td style="background:linear-gradient(135deg,#7a1558,#b0257e);padding:30px 36px;">
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td><div style="color:#f5c842;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:8px;">NEW ENQUIRY &mdash; ${now}</div><div style="font-size:20px;font-weight:700;color:#ffffff;">New Contact Form Submission</div></td>
      <td align="right" valign="top"><div style="background:rgba(245,200,66,0.15);border:1px solid rgba(245,200,66,0.3);padding:7px 14px;border-radius:8px;text-align:center;"><div style="color:#f5c842;font-size:10px;font-weight:700;text-transform:uppercase;">REF ID</div><div style="color:#ffffff;font-size:12px;font-weight:700;font-family:monospace;">${refId}</div></div></td>
    </tr></table>
  </td></tr>
  <tr><td style="background:#fdf8f2;padding:10px 36px;border-bottom:2px solid #fce4f5;">
    <span style="background:#b0257e;color:#ffffff;padding:4px 14px;border-radius:50px;font-size:12px;font-weight:700;">${data.purpose}</span>
  </td></tr>
  <tr><td style="padding:28px 36px 0;">
    <div style="font-size:11px;font-weight:700;color:#b0257e;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #fce4f5;padding-bottom:7px;">SENDER DETAILS</div>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="padding:7px 0;font-size:12px;color:#7a6f65;font-weight:600;text-transform:uppercase;width:120px;">Name</td><td style="padding:7px 0;font-size:15px;font-weight:700;color:#1a160e;">${data.fullName}</td></tr>
      <tr><td style="padding:7px 0;font-size:12px;color:#7a6f65;font-weight:600;text-transform:uppercase;">Email</td><td style="padding:7px 0;font-size:14px;"><a href="mailto:${data.email}" style="color:#b0257e;font-weight:600;">${data.email}</a></td></tr>
      ${phoneRow}
      ${orgRow}
      <tr><td style="padding:7px 0;font-size:12px;color:#7a6f65;font-weight:600;text-transform:uppercase;">Country</td><td style="padding:7px 0;font-size:14px;color:#1a160e;">${data.country}</td></tr>
      <tr><td style="padding:7px 0;font-size:12px;color:#7a6f65;font-weight:600;text-transform:uppercase;">Contact Pref.</td><td style="padding:7px 0;font-size:14px;color:#1a160e;">${data.contactPref}</td></tr>
      ${sourceRow}
    </table>
  </td></tr>
  <tr><td style="padding:20px 36px 28px;">
    <div style="font-size:11px;font-weight:700;color:#b0257e;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px;margin-top:8px;border-bottom:1px solid #fce4f5;padding-bottom:7px;">SUBJECT &amp; MESSAGE</div>
    <div style="font-size:14px;font-weight:700;color:#1a160e;margin-bottom:10px;">${data.subject}</div>
    <div style="background:#fdf8f2;border-left:4px solid #b0257e;padding:14px 16px;border-radius:0 10px 10px 0;font-size:13px;color:#4a3f35;line-height:1.75;white-space:pre-wrap;">${data.message}</div>
  </td></tr>
  <tr><td style="background:#fdf8f2;padding:20px 36px;border-top:1px solid #fce4f5;">
    <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)}" style="display:inline-block;background:#b0257e;color:#ffffff;padding:10px 22px;border-radius:50px;font-size:13px;font-weight:700;text-decoration:none;">Reply to ${data.fullName}</a>
    ${callBtn}
  </td></tr>
  <tr><td style="background:#12100e;padding:16px 36px;text-align:center;color:rgba(255,255,255,0.4);font-size:11px;">
    Red Mirchi Associates &bull; Auto-generated from website contact form &bull; Ref: ${refId}
  </td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

function buildConfirmHtml(data: ContactFormData, refId: string): string {
  const firstName = data.fullName.split(" ")[0];

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>We received your message</title></head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background:#f2ede4;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f2ede4;padding:28px 0;">
<tr><td align="center">
<table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
  <tr><td style="background:linear-gradient(150deg,#12001e,#7a1558,#b0257e);padding:44px 36px;text-align:center;">
    <h1 style="font-size:22px;font-weight:700;color:#ffffff;margin:0 0 8px;">Thank you, ${firstName}!</h1>
    <p style="font-size:13px;color:rgba(255,255,255,0.75);margin:0 0 18px;line-height:1.6;">We have received your message and will get back to you shortly.</p>
    <div style="display:inline-block;background:rgba(245,200,66,0.15);border:1px solid rgba(245,200,66,0.3);padding:7px 18px;border-radius:50px;">
      <span style="color:rgba(255,255,255,0.6);font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">Reference ID: </span>
      <span style="color:#f5c842;font-size:12px;font-weight:700;font-family:monospace;">${refId}</span>
    </div>
  </td></tr>
  <tr><td style="padding:32px 36px 24px;">
    <div style="font-size:11px;font-weight:700;color:#b0257e;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:18px;">WHAT HAPPENS NEXT</div>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="padding-bottom:14px;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td valign="top" width="38"><div style="width:32px;height:32px;border-radius:50%;background:#b0257e;color:#fff;font-size:14px;font-weight:700;text-align:center;line-height:32px;">1</div></td>
          <td style="padding-left:12px;"><div style="font-size:13px;font-weight:700;color:#1a160e;margin-bottom:2px;">Message Received</div><div style="font-size:12px;color:#7a6f65;line-height:1.6;">Your enquiry has been logged and assigned to our horticulture team.</div></td>
        </tr></table>
      </td></tr>
      <tr><td style="padding-bottom:14px;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td valign="top" width="38"><div style="width:32px;height:32px;border-radius:50%;background:#2d7a3a;color:#fff;font-size:14px;font-weight:700;text-align:center;line-height:32px;">2</div></td>
          <td style="padding-left:12px;"><div style="font-size:13px;font-weight:700;color:#1a160e;margin-bottom:2px;">Under Review</div><div style="font-size:12px;color:#7a6f65;line-height:1.6;">Our specialists are reviewing your requirements and preparing a response.</div></td>
        </tr></table>
      </td></tr>
      <tr><td style="padding-bottom:14px;">
        <table cellpadding="0" cellspacing="0"><tr>
          <td valign="top" width="38"><div style="width:32px;height:32px;border-radius:50%;background:#e8a020;color:#fff;font-size:14px;font-weight:700;text-align:center;line-height:32px;">3</div></td>
          <td style="padding-left:12px;"><div style="font-size:13px;font-weight:700;color:#1a160e;margin-bottom:2px;">We Will Contact You via ${data.contactPref}</div><div style="font-size:12px;color:#7a6f65;line-height:1.6;">Expect a response within 24&ndash;48 hours (Mon&ndash;Sat, 9 AM &ndash; 6 PM IST).</div></td>
        </tr></table>
      </td></tr>
    </table>
  </td></tr>
  <tr><td style="padding:0 36px 28px;">
    <div style="background:#fdf8f2;border:1px solid #fce4f5;border-radius:12px;padding:18px 20px;">
      <div style="font-size:11px;font-weight:700;color:#b0257e;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:12px;">YOUR SUBMISSION</div>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td width="50%" valign="top" style="padding-bottom:8px;"><div style="font-size:11px;color:#7a6f65;font-weight:600;text-transform:uppercase;margin-bottom:2px;">Purpose</div><div style="font-size:13px;color:#1a160e;font-weight:600;">${data.purpose}</div></td>
          <td width="50%" valign="top" style="padding-bottom:8px;"><div style="font-size:11px;color:#7a6f65;font-weight:600;text-transform:uppercase;margin-bottom:2px;">Subject</div><div style="font-size:13px;color:#1a160e;font-weight:600;">${data.subject}</div></td>
        </tr>
      </table>
    </div>
  </td></tr>
  <tr><td style="background:#1a160e;padding:24px 36px;">
    <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:14px;text-transform:uppercase;letter-spacing:0.08em;">CONTACT US DIRECTLY</div>
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td width="50%" style="padding-bottom:8px;"><div style="font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:3px;">Phone</div><a href="tel:+917206317456" style="color:#f5c842;font-size:13px;font-weight:600;text-decoration:none;">+91-7206317456</a></td>
        <td width="50%" style="padding-bottom:8px;"><div style="font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:3px;">Email</div><a href="mailto:info@redmirchi.org" style="color:#f5c842;font-size:13px;font-weight:600;text-decoration:none;">info@redmirchi.org</a></td>
      </tr>
      <tr><td colspan="2"><div style="font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:3px;">Website</div><a href="https://www.redmirchi.org" style="color:#f5c842;font-size:13px;font-weight:600;text-decoration:none;">www.redmirchi.org</a></td></tr>
    </table>
  </td></tr>
  <tr><td style="background:#0d0b09;padding:16px 36px;text-align:center;color:rgba(255,255,255,0.3);font-size:11px;line-height:1.65;">
    &copy; 2024 Red Mirchi Associates &bull; A-4, Palika Bazaar, Jind, Haryana 126102<br>
    If you did not submit this form, please ignore this email.
  </td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

function buildAdminText(data: ContactFormData, refId: string): string {
  return [
    "NEW CONTACT FORM SUBMISSION — Red Mirchi Associates",
    `Reference ID: ${refId}`,
    "",
    `PURPOSE: ${data.purpose}`,
    `SUBJECT: ${data.subject}`,
    "",
    "SENDER",
    "------",
    `Name:         ${data.fullName}`,
    `Email:        ${data.email}`,
    `Phone:        ${data.phone || "Not provided"}`,
    `Organisation: ${data.organisation || "Not provided"}`,
    `Country:      ${data.country}`,
    `Contact Pref: ${data.contactPref}`,
    `Source:       ${data.source || "Not provided"}`,
    "",
    "MESSAGE",
    "-------",
    data.message,
    "",
    "---",
    "Sent from redmirchi.org contact form",
  ].join("\n");
}

function buildConfirmText(data: ContactFormData, refId: string): string {
  return [
    `Thank you, ${data.fullName}!`,
    "",
    "We have received your message and will get back to you within 24-48 hours.",
    "",
    `Reference ID: ${refId}`,
    "",
    "YOUR SUBMISSION",
    "---------------",
    `Purpose:  ${data.purpose}`,
    `Subject:  ${data.subject}`,
    "",
    "CONTACT US",
    "----------",
    "Phone:   +91-7206317456",
    "Email:   info@redmirchi.org",
    "Website: www.redmirchi.org",
    "",
    "Red Mirchi Associates",
    "A-4, Palika Bazaar, Jind, Haryana 126102",
  ].join("\n");
}

export async function sendContactEmails(data: ContactFormData, refId: string) {
  const fromAddress = process.env.SES_FROM_EMAIL!;
  const fromName = (process.env.SES_FROM_NAME || "Red Mirchi Associates").replace(/[<>,"]/g, "");
  const adminEmail = process.env.ADMIN_EMAIL!;
  const ccEmail = process.env.ADMIN_CC_EMAIL;
  const FROM = `${fromName} <${fromAddress}>`;

  const adminParams: SendEmailCommandInput = {
    Source: FROM,
    Destination: {
      ToAddresses: [adminEmail],
      ...(ccEmail ? { CcAddresses: [ccEmail] } : {}),
    },
    Message: {
      Subject: {
        Data: `[${data.purpose}] ${data.subject} - ${data.fullName} (${refId})`,
        Charset: "UTF-8",
      },
      Body: {
        Html: { Data: buildAdminHtml(data, refId), Charset: "UTF-8" },
        Text: { Data: buildAdminText(data, refId), Charset: "UTF-8" },
      },
    },
    ReplyToAddresses: [`${data.fullName} <${data.email}>`],
  };

  const confirmParams: SendEmailCommandInput = {
    Source: FROM,
    Destination: {
      ToAddresses: [data.email],
    },
    Message: {
      Subject: {
        Data: `We received your message - Ref: ${refId} | Red Mirchi Associates`,
        Charset: "UTF-8",
      },
      Body: {
        Html: { Data: buildConfirmHtml(data, refId), Charset: "UTF-8" },
        Text: { Data: buildConfirmText(data, refId), Charset: "UTF-8" },
      },
    },
  };

  const [adminResult, confirmResult] = await Promise.allSettled([
    sesClient.send(new SendEmailCommand(adminParams)),
    sesClient.send(new SendEmailCommand(confirmParams)),
  ]);

  if (adminResult.status === "fulfilled") {
    console.log(`[SES] Admin email sent. MessageId: ${adminResult.value.MessageId}`);
  } else {
    const err = adminResult.reason as Error & { Code?: string; $metadata?: { httpStatusCode?: number } };
    console.error(`[SES] Admin email FAILED: ${err.name} | Code: ${err.Code} | HTTP: ${err.$metadata?.httpStatusCode} | ${err.message}`);
  }

  if (confirmResult.status === "fulfilled") {
    console.log(`[SES] Confirmation email sent to ${data.email}. MessageId: ${confirmResult.value.MessageId}`);
  } else {
    const err = confirmResult.reason as Error & { Code?: string; $metadata?: { httpStatusCode?: number } };
    console.error(`[SES] Confirmation FAILED: ${err.name} | Code: ${err.Code} | HTTP: ${err.$metadata?.httpStatusCode} | ${err.message}`);
  }

  return {
    adminSent: adminResult.status === "fulfilled",
    confirmationSent: confirmResult.status === "fulfilled",
  };
}
