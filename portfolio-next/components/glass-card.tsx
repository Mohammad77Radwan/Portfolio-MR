"use client";

import { motion } from "framer-motion";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverable?: boolean;
}

/**
 * GlassCard Component
 * Carte avec effet glassmorphism (backdrop-blur, bordures semi-transparentes)
 * Parfait pour les sections héros, les projets et les témoignages
 */
export function GlassCard({
  children,
  className = "",
  delay = 0,
  hoverable = true,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`
        relative group
        backdrop-blur-xl bg-white/10 dark:bg-slate-900/20
        border border-white/20 dark:border-slate-700/30
        rounded-2xl p-6 md:p-8
        shadow-xl shadow-black/10 dark:shadow-black/30
        ${hoverable ? "hover:bg-white/15 dark:hover:bg-slate-900/30 hover:border-white/30 dark:hover:border-slate-700/50" : ""}
        transition-all duration-300
        ${className}
      `}
    >
      {/* Gradient overlay effect au fond */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      {/* Contenu */}
      <div className="relative z-10">{children}</div>

      {/* Glow effect au hoverset */}
      {hoverable && (
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl" />
        </div>
      )}
    </motion.div>
  );
}
