"use client";

import { useCallback } from "react";

interface SkipLinkProps {
  targetId?: string;
  className?: string;
}

export function SkipLink({ targetId = "main-content", className }: SkipLinkProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        target.focus();
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    [targetId]
  );

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={
        className ||
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
      }
    >
      Aller au contenu principal
    </a>
  );
}
