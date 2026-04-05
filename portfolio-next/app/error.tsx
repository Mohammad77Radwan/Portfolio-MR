"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log to error reporting service in production
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </motion.div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Oups, une erreur est survenue
        </h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          {"Nous sommes désolés, quelque chose s'est mal passé. Veuillez réessayer ou revenir à la page d'accueil."}
        </p>

        {/* Error Details (development only) */}
        {process.env.NODE_ENV === "development" && (
          <details className="mb-8 text-left rounded-lg border border-slate-800 bg-slate-900/50 p-4">
            <summary className="cursor-pointer text-sm font-medium text-slate-300">
              Détails techniques
            </summary>
            <pre className="mt-2 overflow-auto text-xs text-red-400">
              {error.message}
              {error.digest && (
                <>
                  {"\n"}Digest: {error.digest}
                </>
              )}
            </pre>
          </details>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} size="lg">
            Réessayer
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = "/")}
          >
            {"Retour à l'accueil"}
          </Button>
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-red-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>
    </div>
  );
}
