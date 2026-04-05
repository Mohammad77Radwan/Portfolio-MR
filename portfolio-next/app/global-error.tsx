"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log to error reporting service
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="fr">
      <body className="bg-slate-950 text-white">
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
          <div className="text-center max-w-md">
            {/* Error Icon */}
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20">
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
            </div>

            {/* Error Message */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Erreur critique
            </h1>
            <p className="text-slate-400 mb-8 leading-relaxed">
              {"Une erreur inattendue s'est produite. L'application doit être rechargée."}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
              >
                Réessayer
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-transparent px-6 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
              >
                {"Retour à l'accueil"}
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
