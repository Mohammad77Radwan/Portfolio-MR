"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { NewsletterFormSchema, type NewsletterFormData } from "@/lib/schemas";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(NewsletterFormSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = useCallback(async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setStatus("idle");

    try {
      // Simulate API call - Replace with actual newsletter service integration
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // In production, you would integrate with:
      // - Mailchimp, ConvertKit, Buttondown, etc.
      console.log("Newsletter subscription:", data.email);
      
      setStatus("success");
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }, [reset]);

  return (
    <section 
      className="relative py-16 px-4" 
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-3xl mx-auto rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/90 to-cyan-600/90 p-8 md:p-10 text-center shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            id="newsletter-heading" 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Restez à jour avec mes articles
          </h2>
          <p className="text-blue-100 mb-8 max-w-md mx-auto">
            {"Recevez les derniers articles sur le développement web et l'IA directement dans votre boîte mail."}
          </p>

          <div className="relative mx-auto max-w-lg overflow-hidden rounded-xl p-px">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,rgba(255,255,255,0.95),rgba(147,197,253,0.95),rgba(103,232,249,0.95),rgba(255,255,255,0.95))]"
            />

            <div className="relative rounded-[11px] bg-white/12 backdrop-blur-md border border-white/25 p-3 md:p-4">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-3 rounded-lg p-4"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle className="w-5 h-5 text-green-300" aria-hidden="true" />
                  <span className="text-white font-semibold">
                    Merci pour votre abonnement!
                  </span>
                </motion.div>
              ) : (
                <form 
                  onSubmit={handleSubmit(onSubmit)} 
                  className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
                  noValidate
                >
                  <div className="flex-1">
                    <div className="relative">
                      <Mail 
                        className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" 
                        aria-hidden="true" 
                      />
                      <input
                        type="email"
                        placeholder="Votre email"
                        aria-label="Adresse email"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "newsletter-error" : undefined}
                        {...register("email")}
                        className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/20 border text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-colors ${
                          errors.email
                            ? "border-red-400 focus:ring-red-400/50"
                            : "border-white/30 focus:ring-white/50"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p 
                        id="newsletter-error" 
                        className="mt-1 text-sm text-red-200 text-left"
                        role="alert"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                    className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {"S'abonner"}
                  </Button>
                </form>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center gap-2 mt-3 text-red-200"
                  role="alert"
                >
                  <AlertCircle className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm">
                    Une erreur est survenue. Veuillez réessayer.
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
