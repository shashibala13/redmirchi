import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional().refine((v) => !v || /^[+\d\s\-()]{7,15}$/.test(v), "Invalid phone"),
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

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ContactApiResponse {
  success: boolean;
  message: string;
  referenceId?: string;
  error?: string;
}
