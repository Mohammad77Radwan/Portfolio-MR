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

  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
  if (!formspreeEndpoint) {
    return {
      ok: false,
      message:
        "Le formulaire de contact n'est pas configuré (FORMSPREE_ENDPOINT manquant).",
      fieldErrors: {},
    };
  }

  try {
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: parsed.data.name,
        email: parsed.data.email,
        subject: parsed.data.subject,
        message: parsed.data.message,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        ok: false,
        message:
          "Échec de l'envoi du message. Merci de réessayer dans quelques instants.",
        fieldErrors: {},
      };
    }
  } catch {
    return {
      ok: false,
      message:
        "Impossible de joindre le service de contact pour le moment.",
      fieldErrors: {},
    };
  }

  return {
    ok: true,
    message: "Message envoyé avec succès. Merci, je reviens vers vous rapidement.",
    fieldErrors: {},
  };
}
