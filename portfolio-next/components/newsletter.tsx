"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Restez à jour avec mes articles
          </h2>
          <p className="text-blue-100 mb-8 max-w-md mx-auto">
            Recevez les derniers articles sur le développement web et l&apos;IA
            directement dans votre boîte mail.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30"
            >
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span className="text-white font-semibold">
                Merci pour votre abonnement!
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "..." : "S'abonner"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
