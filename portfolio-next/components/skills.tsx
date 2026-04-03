"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Skill } from "@/types";

const categoryImpact: Record<string, string> = {
  "Langages":
    "Base solide pour choisir le bon niveau d'abstraction et livrer du code maintenable, testable et performant selon les contraintes produit.",
  "Frameworks & Librairies":
    "Capacité à accélérer le delivery sans sacrifier la qualité: architecture claire, UX moderne, composants réutilisables et cycles d'itération courts.",
  "Outils & Services":
    "Maîtrise des outils de production et d'exploitation pour fiabiliser les releases, observer les systèmes et réduire le time-to-fix en contexte réel.",
  "Compétences Transversales":
    "Vision end-to-end orientée impact métier: arbitrages techniques pertinents, communication claire et exécution efficace en équipe pluridisciplinaire.",
};

const categoryHighlights: Record<string, string[]> = {
  "Langages": ["Qualité du code", "Performance", "Maintenabilité"],
  "Frameworks & Librairies": ["Vitesse de delivery", "UI réutilisable", "Architecture scalable"],
  "Outils & Services": ["Fiabilité des releases", "Observabilité", "Réponse aux incidents"],
  "Compétences Transversales": ["Leadership technique", "Alignement produit", "Discipline d'exécution"],
};

function SkillCard({ skill }: { skill: Skill["skills"][0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="space-y-2 rounded-lg border border-white/10 bg-slate-900/30 p-3 backdrop-blur-sm"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-slate-900 dark:text-slate-50">
          {skill.name}
        </span>
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          {skill.level}%
        </span>
      </div>
      <div className="relative h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500"
        ></motion.div>
        <motion.div
          aria-hidden="true"
          className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          initial={{ x: -90 }}
          whileInView={{ x: 260 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="skills" className="relative overflow-hidden py-24 px-4">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-8 top-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 22, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-4 bottom-4 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -24, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-cyan-200 via-blue-200 to-fuchsia-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Compétences Techniques
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Une sélection des technologies et frameworks que j&apos;utilise au
            quotidien pour construire des applications web modernes et
            performantes.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              variants={categoryVariants}
              whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-900/55 p-8 shadow-[0_10px_40px_rgba(2,6,23,0.35)] backdrop-blur-xl"
            >
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-2xl"
                animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.8, 0.45] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
              />
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-slate-50">
                {skillCategory.category}
              </h3>

              <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_240px]">
                <div className="space-y-6">
                  {skillCategory.skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>

                <div className="flex flex-col gap-4">
                  <aside className="rounded-xl border border-cyan-300/25 bg-cyan-400/10 p-4">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-cyan-200">
                      Valeur En Mission
                    </p>
                    <p className="text-sm leading-6 text-slate-200/95">
                      {categoryImpact[skillCategory.category]}
                    </p>
                  </aside>

                  <div className="relative min-h-[210px] overflow-hidden rounded-xl border border-blue-300/20 bg-blue-500/10 p-4">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-blue-200">
                      Focus Opérationnel
                    </p>

                    <div className="relative mx-auto mb-4 h-24 w-24">
                      <motion.div
                        className="absolute inset-0 rounded-full border border-cyan-300/30"
                        animate={{ scale: [1, 1.14, 1], opacity: [0.35, 0.85, 0.35] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute inset-2 rounded-full border border-fuchsia-300/35"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.75, 0.3] }}
                        transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute inset-[22px] rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skillCategory.skills.slice(0, 3).map((skill, chipIndex) => (
                        <motion.span
                          key={`${skillCategory.category}-${skill.name}`}
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: chipIndex * 0.08, duration: 0.35 }}
                          className="rounded-full border border-white/15 bg-slate-900/40 px-2.5 py-1 text-xs font-medium text-slate-100"
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-fuchsia-300/20 bg-fuchsia-500/10 p-4">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-fuchsia-200">
                      Points Forts D'Exécution
                    </p>
                    <div className="space-y-2">
                      {(categoryHighlights[skillCategory.category] ?? []).map((item, idx) => (
                        <motion.div
                          key={`${skillCategory.category}-${item}`}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.08, duration: 0.3 }}
                          className="flex items-center gap-2 text-sm text-slate-200"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-white/15 bg-gradient-to-r from-blue-500/20 via-cyan-500/15 to-fuchsia-500/20 p-8 backdrop-blur-xl"
        >
          <h3 className="text-xl font-bold mb-6">Certifications & Formations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">GitHub Foundations</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Certification GH-900 - Octobre 2025
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">BTS SIO SLAM</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Lycée Simone Weil - 2024-2026
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
