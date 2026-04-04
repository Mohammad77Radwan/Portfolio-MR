"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/lib/data";
import { Calendar, Clock, ArrowRight } from "lucide-react";

function formatTime(dateString: string) {
  return new Date(dateString).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
export function Blog() {
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

  const featured = blogPosts.filter((post) => post.featured);
  const others = blogPosts.filter((post) => !post.featured);

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Articles & Veille Tech</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Découvrez mes articles et analyses sur les tendances technologiques,
            l&apos;IA, et les meilleures pratiques en développement web.
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featured.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6">À la une</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="group bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-800"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString("fr-FR", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {formatTime(post.date)}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Posts */}
        {others.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Derniers articles</h3>
            <div className="space-y-4">
              {others.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="group bg-white dark:bg-slate-800 rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700 flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString("fr-FR", {
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {formatTime(post.date)}
                      </div>
                      <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-700">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 flex-shrink-0 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all mt-1" />
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
