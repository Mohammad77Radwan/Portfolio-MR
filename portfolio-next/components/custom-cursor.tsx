"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * CustomCursor Component
 * Remplace la souris par un cercle interactif avec effect mix-blend-mode: difference
 * S'agrandit au survol des éléments interactifs
 */
export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Tracker la position de la souris
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Détecter le survol des éléments interactifs
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("interactive")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Cercle externe */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div
          className="relative w-6 h-6 rounded-full border-2 border-blue-500"
          style={{
            boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
          }}
        />
      </motion.div>

      {/* Point central */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full bg-blue-500"
          style={{
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
          }}
        />
      </motion.div>

      {/* Cacher le curseur par défaut sur desktop */}
      <style>{`
        @media (min-width: 1024px) {
          html,
          body,
          a,
          button {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
