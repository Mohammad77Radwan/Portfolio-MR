"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { Send, Mail, GitBranch, MapPin } from "lucide-react";
import {
  initialContactState,
  submitContactAction,
} from "@/app/actions/contact";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {pending ? "Envoi en cours..." : "Envoyer le message"}
      {!pending && <Send className="w-4 h-4" />}
    </button>
  );
}

export function Contact() {
  const [state, formAction] = useActionState(submitContactAction, initialContactState);

  useEffect(() => {
    if (!state.ok) return;
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    form?.reset();
  }, [state.ok]);

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
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Parlons ensemble</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Intéressé par une collaboration ? N&apos;hésitez pas à me contacter pour
            discuter de vos projets ou opportunités.
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
            className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-bold mb-2">Email</h3>
            <a
              href="mailto:mohammadradwn804@gmail.com"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
            >
              mohammadradwn804@gmail.com
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-bold mb-2">Localisation</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Saint-Étienne, France
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="font-bold mb-2">GitHub</h3>
            <a
              href="https://github.com/Mohammad77Radwan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm"
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
          className="relative overflow-hidden rounded-xl p-px"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_0deg,rgba(14,165,233,0.95),rgba(168,85,247,0.9),rgba(236,72,153,0.9),rgba(14,165,233,0.95))]"
          />

          <div className="relative rounded-[11px] bg-white dark:bg-slate-800 p-8">
            <h3 className="text-2xl font-bold mb-6">Envoyez-moi un message</h3>

            {state.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg border ${
                  state.ok
                    ? "bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700"
                    : "bg-red-100 text-red-700 border-red-300 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700"
                }`}
              >
                {state.ok ? "✓ " : "⚠ "}
                {state.message}
              </motion.div>
            )}

            <form id="contact-form" action={formAction} className="space-y-6">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  required
                  className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {state.fieldErrors?.name && (
                  <p className="text-sm text-red-600 dark:text-red-400 -mt-4 md:col-span-2">{state.fieldErrors.name}</p>
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  required
                  className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {state.fieldErrors?.email && (
                  <p className="text-sm text-red-600 dark:text-red-400 -mt-4 md:col-span-2">{state.fieldErrors.email}</p>
                )}
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Sujet"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {state.fieldErrors?.subject && (
                <p className="text-sm text-red-600 dark:text-red-400 -mt-4">{state.fieldErrors.subject}</p>
              )}

              <textarea
                name="message"
                placeholder="Votre message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
              {state.fieldErrors?.message && (
                <p className="text-sm text-red-600 dark:text-red-400 -mt-4">{state.fieldErrors.message}</p>
              )}

              <SubmitButton />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
