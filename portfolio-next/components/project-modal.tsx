"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, X } from "lucide-react";
import type { Project } from "@/types";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.button
            type="button"
            aria-label="Fermer le détail projet"
            className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Détails du projet ${project.title}`}
            className="fixed inset-x-4 top-6 bottom-6 z-[130] mx-auto max-w-4xl overflow-y-auto rounded-2xl border border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur-xl dark:border-slate-700/30 dark:bg-slate-900/95"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Mini Case Study
                </p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{project.description}</p>
              </div>
              <button
                type="button"
                aria-label="Fermer la modale projet"
                onClick={onClose}
                className="min-h-11 min-w-11 rounded-lg border border-slate-300 p-2 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-6 grid gap-4 md:grid-cols-3">
              {(project.stats ?? []).map((stat) => (
                <div key={stat.label} className="rounded-xl border border-slate-200 bg-white/60 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                  <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Contexte</h4>
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">Projet réalisé dans une logique de production réelle avec contraintes UX, performance et robustesse.</p>
              </article>
              <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Problème</h4>
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">Comment livrer une solution fiable, rapide et compréhensible pour les utilisateurs finaux en gardant une architecture maintenable.</p>
              </article>
              <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Solution technique</h4>
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{project.longDescription}</p>
              </article>
              <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Compétences BTS</h4>
                <div className="flex flex-wrap gap-2">
                  {(project.btsBlocks ?? []).map((block) => (
                    <span
                      key={block}
                      className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                    >
                      {block}
                    </span>
                  ))}
                </div>
                <ul className="mt-3 list-disc pl-5 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  {(project.btsCompetences ?? []).map((competence) => (
                    <li key={competence}>{competence}</li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech.name} className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:text-slate-200">
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  <GitBranch className="h-4 w-4" />
                  Code Source
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  <ExternalLink className="h-4 w-4" />
                  Voir en Live
                </a>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
