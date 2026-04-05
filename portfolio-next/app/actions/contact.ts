"use server";

import { ContactFormSchema, formatZodErrors, type ActionResult } from "@/lib/schemas";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xqegyree";

export interface ContactState {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
}

export const initialContactState: ContactState = {
  success: false,
  message: "",
  fieldErrors: undefined,
};

export async function submitContactAction(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Extract form data
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    honeypot: formData.get("website") || "",
  };

  // Validate with Zod
  const validationResult = ContactFormSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Veuillez corriger les erreurs ci-dessous.",
      fieldErrors: formatZodErrors(validationResult.error),
    };
  }

  const { name, email, subject, message, honeypot } = validationResult.data;

  // Check honeypot for spam
  if (honeypot && honeypot.length > 0) {
    // Silently reject spam but return success to not alert bots
    return {
      success: true,
      message: "Merci ! Votre message a été envoyé.",
    };
  }

  try {
    // Submit to Formspree
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Formspree error:", errorData);
      
      return {
        success: false,
        message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      };
    }

    return {
      success: true,
      message: "Merci ! Votre message a été envoyé avec succès.",
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    
    return {
      success: false,
      message: "Une erreur réseau est survenue. Veuillez réessayer plus tard.",
    };
  }
}

/**
 * Alternative standalone validation function for client-side use
 */
export async function validateContactForm(
  data: unknown
): Promise<ActionResult<void>> {
  const result = ContactFormSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      error: "Validation failed",
      fieldErrors: formatZodErrors(result.error),
    };
  }

  return { success: true };
}
