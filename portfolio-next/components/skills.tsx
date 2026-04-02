"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Skill } from "@/types";

function SkillCard({ skill }: { skill: Skill["skills"][0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-slate-900 dark:text-slate-50">
          {skill.name}
        </span>
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
        ></motion.div>
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
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Compétences Techniques</h2>
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
          {skills.map((skillCategory) => (
            <motion.div
              key={skillCategory.category}
              variants={categoryVariants}
              className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-slate-50">
                {skillCategory.category}
              </h3>

              <div className="space-y-6">
                {skillCategory.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8"
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
