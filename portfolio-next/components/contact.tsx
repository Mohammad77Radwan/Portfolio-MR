"use client";

import { useActionState, useCallback, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Mail, GitBranch, MapPin, Loader2 } from "lucide-react";
import { ContactFormSchema, type ContactFormData } from "@/lib/schemas";
import { submitContactAction, initialContactState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField, FormLabel, FormError, FormSuccess } from "@/components/ui/form-field";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    submitContactAction,
    initialContactState
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setError,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  // Handle server-side field errors
  useEffect(() => {
    if (state.fieldErrors) {
      Object.entries(state.fieldErrors).forEach(([field, messages]) => {
        if (messages && messages[0]) {
          setError(field as keyof ContactFormData, {
            type: "server",
            message: messages[0],
          });
        }
      });
    }
  }, [state.fieldErrors, setError]);

  // Reset form on success
  useEffect(() => {
    if (state.success) {
      reset();
    }
  }, [state.success, reset]);

  const onSubmit = useCallback(
    (data: ContactFormData) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("subject", data.subject);
      formData.append("message", data.message);
      if (data.honeypot) {
        formData.append("website", data.honeypot);
      }
      formAction(formData);
    },
    [formAction]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="relative py-20 px-4" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 id="contact-heading" className="text-4xl font-bold mb-4 text-white">
            Parlons ensemble
          </h2>
          <p className="text-slate-400 max-w-2xl">
            {"Intéressé par une collaboration ? N'hésitez pas à me contacter pour discuter de vos projets ou opportunités."}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Contact Info Cards */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-400" aria-hidden="true" />
            </div>
            <h3 className="font-bold mb-2 text-white">Email</h3>
            <a
              href="mailto:mohammadradwn804@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
            >
              mohammadradwn804@gmail.com
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-cyan-400" aria-hidden="true" />
            </div>
            <h3 className="font-bold mb-2 text-white">Localisation</h3>
            <p className="text-slate-400 text-sm">Saint-Étienne, France</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-slate-500/10 border border-slate-500/20 flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-slate-400" aria-hidden="true" />
            </div>
            <h3 className="font-bold mb-2 text-white">GitHub</h3>
            <a
              href="https://github.com/Mohammad77Radwan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
            >
              @Mohammad77Radwan
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl p-px"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_0deg,rgba(14,165,233,0.95),rgba(6,182,212,0.9),rgba(14,165,233,0.9),rgba(14,165,233,0.95))]"
          />

          <div className="relative rounded-[15px] bg-slate-900 p-8 border border-slate-800">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Envoyez-moi un message
            </h3>

            {/* Status Messages */}
            {state.message && !state.fieldErrors && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
                role="alert"
              >
                {state.success ? (
                  <FormSuccess message={state.message} />
                ) : (
                  <FormError message={state.message} />
                )}
              </motion.div>
            )}

            <form
              ref={formRef}
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              {/* Honeypot field for spam protection */}
              <input
                type="text"
                {...register("honeypot")}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField>
                  <FormLabel htmlFor="name" required>
                    Nom
                  </FormLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                    error={errors.name?.message}
                  />
                  {errors.name && (
                    <FormError id="name-error" message={errors.name.message} />
                  )}
                </FormField>

                <FormField>
                  <FormLabel htmlFor="email" required>
                    Email
                  </FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Votre email"
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                    error={errors.email?.message}
                  />
                  {errors.email && (
                    <FormError id="email-error" message={errors.email.message} />
                  )}
                </FormField>
              </div>

              <FormField>
                <FormLabel htmlFor="subject" required>
                  Sujet
                </FormLabel>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Sujet de votre message"
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  {...register("subject")}
                  error={errors.subject?.message}
                />
                {errors.subject && (
                  <FormError id="subject-error" message={errors.subject.message} />
                )}
              </FormField>

              <FormField>
                <FormLabel htmlFor="message" required>
                  Message
                </FormLabel>
                <Textarea
                  id="message"
                  placeholder="Votre message"
                  rows={6}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  {...register("message")}
                  error={errors.message?.message}
                />
                {errors.message && (
                  <FormError id="message-error" message={errors.message.message} />
                )}
              </FormField>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isPending}
                isLoading={isPending}
              >
                {isPending ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    Envoyer le message
                    <Send className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
