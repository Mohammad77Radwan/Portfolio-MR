"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { projects } from "@/lib/data";
import type { Project } from "@/types";
import { ProjectModal } from "./project-modal";

const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxMic+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzEyJyBmaWxsPScjMTQyMjM3Jy8+PC9zdmc+";

function TiltCard({ project, onOpen, featured = false }: { project: Project; onOpen: (p: Project) => void; featured?: boolean }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const pointerX = useMotionValue(120);
  const pointerY = useMotionValue(120);
  const glowOpacity = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-9, 9]);
  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${pointerX}px ${pointerY}px, rgba(56, 189, 248, 0.18), transparent 72%)`;
  const borderGlow = useMotionTemplate`radial-gradient(170px circle at ${pointerX}px ${pointerY}px, rgba(255, 255, 255, 0.9), transparent 72%)`;

  return (
    <motion.button
      type="button"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        mx.set(px);
        my.set(py);
        pointerX.set(e.clientX - rect.left);
        pointerY.set(e.clientY - rect.top);
        glowOpacity.set(1);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
        glowOpacity.set(0);
      }}
      onClick={() => onOpen(project)}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`group relative flex h-full min-h-[18rem] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-left shadow-sm transition-all hover:shadow-2xl dark:border-slate-700/80 dark:bg-slate-900 ${featured ? "md:col-span-2 md:row-span-2 md:min-h-[30rem]" : ""}`}
    >
      {/* Border glow only near cursor */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] rounded-2xl p-px"
        style={{ backgroundImage: borderGlow, opacity: glowOpacity }}
      >
        <div className="h-full w-full rounded-2xl bg-transparent" />
      </motion.div>

      {/* Spotlight layer */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] rounded-2xl"
        style={{ backgroundImage: spotlight, opacity: glowOpacity }}
      />

      <div className={`relative w-full ${featured ? "h-72 md:flex-1" : "h-52"}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          blurDataURL={BLUR}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 text-slate-900 dark:text-white">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-900/15 px-2.5 py-1 text-[11px] font-semibold text-slate-900 backdrop-blur dark:bg-white/20 dark:text-white">{project.date}</span>
          {(project.btsBlocks ?? []).map((block) => (
            <span key={block} className="rounded-full bg-slate-900/15 px-2.5 py-1 text-[11px] font-semibold text-slate-900 backdrop-blur dark:bg-white/20 dark:text-white">
              {block}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm text-slate-700 dark:text-slate-100/90">
            {project.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

export function ProjectsBento() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.2, 0.58, 0.75], [0, 1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0.1, 0.42, 0.75], [50, 0, -64]);
  const cardsOpacity = useTransform(scrollYProgress, [0.18, 0.34, 0.9], [0, 1, 1]);
  const cardsY = useTransform(scrollYProgress, [0.18, 0.78], [120, -44]);
  const cardsScale = useTransform(scrollYProgress, [0.18, 0.34], [0.9, 1]);

  const categories = useMemo(
    () => ["all", ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );

  const filtered = projects.filter((project) => {
    const categoryMatch = activeCategory === "all" || project.category === activeCategory;
    const queryMatch = `${project.title} ${project.description}`.toLowerCase().includes(query.toLowerCase());
    return categoryMatch && queryMatch;
  });

  const [first, ...rest] = filtered;

  return (
    <section ref={sectionRef} id="projects" className="relative min-h-[185vh] px-4 bg-slate-50 dark:bg-slate-900/50 overflow-x-clip">
      <div className="max-w-7xl mx-auto">
        <motion.div
          style={prefersReducedMotion ? undefined : { opacity: titleOpacity, y: titleY }}
          className="pointer-events-none sticky top-24 md:top-1/2 z-10 md:-translate-y-1/2 py-10"
        >
          <h2 className="text-4xl font-bold mb-4">Projets Réalisés - Bento Showcase</h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-300 text-base md:text-lg">
            Chaque projet est présenté comme une mini case-study interactive pour montrer l&apos;impact, les choix d&apos;architecture et la valeur métier.
          </p>
        </motion.div>

        <motion.div
          style={prefersReducedMotion ? undefined : { opacity: cardsOpacity, y: cardsY, scale: cardsScale }}
          className="relative z-20 pt-[36vh] md:pt-[55vh] pb-24"
        >
          <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Recherche projet, technologie, impact..."
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-blue-500/40 placeholder:text-slate-500 focus:ring-4 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  }`}
                >
                  {category === "all" ? "Tous" : category.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="rounded-xl border border-dashed border-slate-400 p-8 text-center text-slate-600 dark:border-slate-700 dark:text-slate-300">
              Aucun projet ne correspond à ce filtre.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4 auto-rows-[180px]">
              {first && <TiltCard project={first} onOpen={setSelected} featured />}
              {rest.map((project) => (
                <TiltCard key={project.id} project={project} onOpen={setSelected} />
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
