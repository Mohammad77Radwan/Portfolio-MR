"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z.string().email("Adresse email invalide."),
  subject: z.string().min(4, "Le sujet doit contenir au moins 4 caractères."),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères."),
});

export type ContactFormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "subject" | "message", string>>;
};

export const initialContactState: ContactFormState = {
  ok: false,
  message: "",
};

export async function submitContactAction(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = String(formData.get("website") ?? "").trim();
  if (honeypot.length > 0) {
    return {
      ok: false,
      message: "Requête invalide.",
      fieldErrors: {},
    };
  }

  const payload = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    subject: String(formData.get("subject") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    const fields = parsed.error.flatten().fieldErrors;
    return {
      ok: false,
      message: "Merci de corriger les champs en erreur.",
      fieldErrors: {
        name: fields.name?.[0],
        email: fields.email?.[0],
        subject: fields.subject?.[0],
        message: fields.message?.[0],
      },
    };
  }

  // In production, plug this to Resend/Sendgrid/DB.
  console.log("[contact] new submission", { at: new Date().toISOString() });

  return {
    ok: true,
    message: "Message envoyé avec succès. Merci, je reviens vers vous rapidement.",
    fieldErrors: {},
  };
}
