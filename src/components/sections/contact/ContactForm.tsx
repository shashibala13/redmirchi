"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactApiResponse } from "@/types/contact";
import { CheckCircle, AlertCircle, Loader2, RefreshCw } from "lucide-react";
import clsx from "clsx";
import { PURPOSES } from "@/lib/constants";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional().refine((v) => !v || /^[+\d\s\-()]{7,15}$/.test(v), "Invalid phone number"),
  organisation: z.string().max(200).optional(),
  country: z.string().min(1, "Please select your country"),
  purpose: z.enum([
    "Bulk Flower Bulb Order","Retail Purchase","Polyhouse / Greenhouse",
    "Agri Consulting","Contract Farming","Seeds & Irrigation",
    "Training & Workshops","General Enquiry","Partnership / Trade","Other",
  ], { required_error: "Please select a purpose" }),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200),
  message: z.string().min(20, "Message must be at least 20 characters").max(1000),
  contactPref: z.enum(["Phone Call","WhatsApp","Email","In-Person Visit"]).default("Phone Call"),
  source: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, "You must agree to the privacy policy"),
});

type FormData = z.infer<typeof formSchema>;

const COUNTRIES = [
  "India","Afghanistan","Australia","Bahrain","Bangladesh","Bhutan",
  "Canada","China","France","Germany","Indonesia","Iran","Iraq",
  "Japan","Jordan","Kenya","Kuwait","Malaysia","Maldives","Myanmar",
  "Nepal","Netherlands","New Zealand","Nigeria","Oman","Pakistan",
  "Philippines","Qatar","Russia","Saudi Arabia","Singapore","South Africa",
  "South Korea","Sri Lanka","Thailand","Turkey","UAE","United Kingdom",
  "United States","Vietnam","Other",
];

const CONTACT_PREFS = [
  { value: "Phone Call", emoji: "📞" },
  { value: "WhatsApp", emoji: "💬" },
  { value: "Email", emoji: "✉️" },
  { value: "In-Person Visit", emoji: "🏢" },
] as const;

const SOURCES = [
  "Google / Web Search","Word of Mouth / Referral",
  "Social Media (Facebook / Instagram)","YouTube",
  "Agriculture Exhibition / Mela","Existing Customer","Other",
];

function Field({ label, required, error, children }: {
  label: React.ReactNode; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-bold text-ink flex items-center gap-1.5">
        {label}{required && <span className="text-magenta">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-[12px] text-red-500 font-semibold flex items-center gap-1">
          <AlertCircle size={11} />{error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [apiResponse, setApiResponse] = useState<ContactApiResponse | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, watch, reset, formState: { errors, touchedFields } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: { contactPref: "Phone Call", consent: false },
  });

  const purpose = watch("purpose");
  const pref = watch("contactPref");
  const msg = watch("message") || "";
  const consent = watch("consent");

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setApiResponse(await res.json());
    } catch {
      setApiResponse({ success: false, message: "Network error. Please check your connection and try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => { reset(); setApiResponse(null); window.scrollTo({ top: 0, behavior: "smooth" }); };

  if (apiResponse?.success) {
    return (
      <div className="bg-white rounded-[28px] p-10 shadow-magenta border border-magenta/15 flex flex-col items-center text-center success-anim">
        <div className="text-[5rem] mb-4 animate-bounce">🌸</div>
        <div className="inline-flex items-center gap-2 bg-green-pale text-green rounded-full px-4 py-1.5 text-[11px] font-bold mb-4 uppercase tracking-wider">
          <CheckCircle size={13} /> Message Sent Successfully
        </div>
        <h2 className="font-cormorant text-[2rem] font-bold text-ink mb-2">Thank you for reaching out!</h2>
        <p className="text-[#7a6f65] text-[13px] leading-relaxed mb-5 max-w-xs">
          Our team will get back to you within <strong className="text-ink">24–48 hours</strong> (Mon–Sat, 9 AM–6 PM IST).
        </p>
        {apiResponse.referenceId && (
          <div className="bg-cream border border-magenta/15 rounded-2xl px-6 py-4 mb-6 w-full max-w-xs text-center">
            <div className="text-[11px] text-magenta font-bold tracking-widest uppercase mb-1">Reference ID</div>
            <div className="font-mono text-[1.1rem] font-bold text-ink">{apiResponse.referenceId}</div>
            <div className="text-[11px] text-[#7a6f65] mt-1">Save this for follow-up</div>
          </div>
        )}
        <div className="text-left w-full max-w-xs space-y-3 mb-7">
          {[["📬","Message logged","Assigned to our team"],["✉️","Confirmation sent","Check your inbox"],["📞","We'll contact you","Via your preferred method"]].map(([i,t,d]) => (
            <div key={t} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-magenta-pale flex items-center justify-center text-base flex-shrink-0">{i}</div>
              <div><div className="text-[13px] font-bold text-ink">{t}</div><div className="text-[12px] text-[#7a6f65]">{d}</div></div>
            </div>
          ))}
        </div>
        <button onClick={resetForm} className="flex items-center gap-2 text-[13px] font-semibold text-magenta hover:text-magenta-deep transition-colors">
          <RefreshCw size={13} /> Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-[28px] shadow-magenta border border-magenta/15 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-magenta-deep via-magenta to-magenta-light" />
      <div className="p-8 md:p-10">
        <div className="mb-7">
          <div className="text-[11px] font-bold text-magenta tracking-[0.1em] uppercase mb-1.5">📝 Contact Form</div>
          <h2 className="font-cormorant text-[2rem] font-bold text-ink mb-1">Send Us a Message</h2>
          <p className="text-[#7a6f65] text-[13px] leading-relaxed">Fields marked <span className="text-magenta font-bold">*</span> are required.</p>
        </div>

        {apiResponse && !apiResponse.success && (
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-5 text-[13px] text-red-700">
            <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
            <div><strong>Submission failed</strong><p className="mt-0.5 text-red-600">{apiResponse.message}</p></div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="👤 Full Name" required error={errors.fullName?.message}>
              <input {...register("fullName")} placeholder="e.g. Rajendra Singh" autoComplete="name"
                className={clsx("form-input", errors.fullName && "form-input-error", touchedFields.fullName && !errors.fullName && "form-input-valid")} />
            </Field>
            <Field label="✉️ Email Address" required error={errors.email?.message}>
              <input {...register("email")} type="email" placeholder="name@example.com" autoComplete="email"
                className={clsx("form-input", errors.email && "form-input-error", touchedFields.email && !errors.email && "form-input-valid")} />
            </Field>
          </div>

          {/* Phone + Organisation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="📞 Phone / WhatsApp" error={errors.phone?.message}>
              <input {...register("phone")} type="tel" placeholder="+91 98765 43210" autoComplete="tel"
                className={clsx("form-input", errors.phone && "form-input-error")} />
            </Field>
            <Field label="🏢 Organisation / Farm">
              <input {...register("organisation")} placeholder="Optional — company or farm name" className="form-input" />
            </Field>
          </div>

          {/* Country */}
          <Field label="🌍 Country" required error={errors.country?.message}>
            <select {...register("country")} className={clsx("form-input cursor-pointer", errors.country && "form-input-error")}>
              <option value="">— Select Country —</option>
              {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </Field>

          {/* Purpose */}
          <Field label="🎯 Purpose of Contact" required error={errors.purpose?.message}>
            <div className="flex flex-wrap gap-2 mt-1">
              {PURPOSES.map(({ value, emoji }) => (
                <label key={value} className="cursor-pointer">
                  <input type="radio" value={value} className="sr-only" {...register("purpose")} />
                  <span className={clsx("chip-label", purpose === value && "chip-checked")}>{emoji} {value}</span>
                </label>
              ))}
            </div>
          </Field>

          {/* Subject */}
          <Field label="📝 Subject" required error={errors.subject?.message}>
            <input {...register("subject")} placeholder="Brief subject of your message" maxLength={120}
              className={clsx("form-input", errors.subject && "form-input-error", touchedFields.subject && !errors.subject && "form-input-valid")} />
          </Field>

          {/* Message */}
          <Field label="💬 Your Message / Description" required error={errors.message?.message}>
            <textarea {...register("message")} rows={5} maxLength={1000}
              placeholder="Describe your requirements, questions, or anything you'd like us to know..."
              className={clsx("form-input resize-y min-h-[130px] leading-relaxed", errors.message && "form-input-error")} />
            <div className="flex justify-end mt-0.5">
              <span className={clsx("text-[11px]", msg.length > 900 ? "text-red-500" : msg.length > 700 ? "text-amber-600" : "text-[#7a6f65]")}>
                {msg.length} / 1000
              </span>
            </div>
          </Field>

          {/* Preferred contact */}
          <Field label="📡 Preferred Contact Method">
            <div className="flex flex-wrap gap-2 mt-1">
              {CONTACT_PREFS.map(({ value, emoji }) => (
                <label key={value} className="cursor-pointer">
                  <input type="radio" value={value} className="sr-only" {...register("contactPref")} />
                  <span className={clsx("chip-label", pref === value && "chip-checked")}>{emoji} {value}</span>
                </label>
              ))}
            </div>
          </Field>

          {/* How did you hear */}
          <Field label="💡 How Did You Hear About Us?">
            <select {...register("source")} className="form-input cursor-pointer">
              <option value="">— Please select —</option>
              {SOURCES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>

          {/* Consent */}
          <div className="flex items-start gap-3 mt-1">
            <input type="checkbox" id="consent" {...register("consent")} className="mt-1 w-4 h-4 rounded accent-magenta cursor-pointer flex-shrink-0" />
            <label htmlFor="consent" className="text-[12.5px] text-[#7a6f65] leading-relaxed cursor-pointer">
              I agree that Red Mirchi Associates may contact me regarding my enquiry. I have read the{" "}
              <a href="/privacy" className="text-magenta font-semibold hover:underline">Privacy Policy</a> and consent to the use of my data.{" "}
              <span className="text-magenta font-bold">*</span>
            </label>
          </div>
          {errors.consent && (
            <p className="text-[12px] text-red-500 font-semibold flex items-center gap-1 -mt-2">
              <AlertCircle size={11} />{errors.consent.message}
            </p>
          )}

          {/* Submit */}
          <button type="submit" disabled={submitting || !consent} className="btn-magenta w-full text-[15px] py-4 mt-1">
            {submitting ? <><Loader2 size={17} className="animate-spin" /> Sending...</> : <>🌸 Send Message</>}
          </button>
          <p className="text-center text-[11px] text-[#bbb] mt-1">🔒 Your data is secure and will not be shared with third parties.</p>
        </form>
      </div>
    </div>
  );
}
