"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./animated-counter";

const stats = [
  {
    label: "Projets Réalisés",
    value: 5,
    suffix: "+",
    icon: "🚀",
  },
  {
    label: "Technologies",
    value: 15,
    suffix: "+",
    icon: "⚙️",
  },
  {
    label: "Années d'Expérience",
    value: 2,
    suffix: "+",
    icon: "📅",
  },
  {
    label: "Code Commits",
    value: 500,
    suffix: "+",
    icon: "💻",
  },
];

export function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-lg bg-slate-50 dark:bg-slate-900 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                <AnimatedCounter
                  from={0}
                  to={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
