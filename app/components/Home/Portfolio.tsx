"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Pbutton from "../share/Pbutton";
import { motion, AnimatePresence } from "framer-motion";

// ── Types ──────────────────────────────────────────────────────────────────
interface Project {
  id: number;
  title: string;
  category: string;
  completed_in?: string;
  description: string;
  project_images?: string[];
  image?: string;
  impact_stats?: { label: string; value: string }[];
  key_features_grid?: { title: string; desc: string }[];
  challenges_and_solutions?: { challenge: string; solution: string }[];
  features: string[];
  technologies: string[];
  challenges_solved: string[];
  role: string;
  liveLink: string;
  githubLink: string;
}

// ── Main Portfolio ─────────────────────────────────────────────────────────
const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [active, setActive] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/data/project.json");
        if (res.ok) {
          const data: Project[] = await res.json();
          setProjects(data);
          const uniqueCategories = Array.from(new Set(data.map((p) => p.category)));
          setCategories(["All", ...uniqueCategories]);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === active.toLowerCase());

  const handleCategoryChange = (cat: string) => {
    setActive(cat);
    setVisibleCount(6);
  };

  if (loading) {
    return (
      <div className="w-full py-20 text-center font-lato text-gray-500 dark:text-gray-400 text-lg">
        Loading Portfolio...
      </div>
    );
  }

  return (
    <section className="bg-[#FEFEFE] dark:bg-[#121212] py-12 md:py-20 px-4 md:px-8 font-lato overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-10 w-full">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1E1E1E] dark:text-white leading-none tracking-[0.03em]">
            Portfolio
          </h2>
          <div className="w-20 h-[4px] bg-[linear-gradient(94.36deg,#FD6F00_3.1%,#E46400_94.54%)] mt-3 mb-4 rounded-full" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-14 w-full">
          {categories.map((cat) => {
            const isActive = active.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`
                  h-[54px] px-8 sm:px-10 rounded-[8px]
                  font-lato font-bold text-[16px] tracking-[0.03em] capitalize
                  transition-all duration-300 select-none active:scale-[0.98]
                  ${isActive
                    ? "bg-[linear-gradient(94.36deg,#FD6F00_3.1%,#E46400_94.54%)] text-white shadow-md"
                    : "bg-[#FFFFFF14] text-[#C6C6C6] hover:bg-[#FFFFFF24] hover:text-white"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full">
          {filtered.slice(0, visibleCount).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Load More */}
        {filtered.length > visibleCount && (
          <div className="mt-12 md:mt-16 w-full flex justify-center">
            <Pbutton
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="w-full sm:w-auto px-10 font-bold"
            >
              Load More
            </Pbutton>
          </div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectDetailsModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

// ── Project Card ───────────────────────────────────────────────────────────
const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  const cardImage =
    project.project_images && project.project_images.length > 0
      ? project.project_images[0]
      : project.image || "/img/placeholder.png";

  return (
    <div
      onClick={onClick}
      className="relative rounded-xl overflow-hidden cursor-pointer group bg-[#1E1E1E] border border-[#2A2A2A] transition-transform duration-300 hover:scale-[1.02]"
      style={{ aspectRatio: "4/3" }}
    >
      <Image
        src={cardImage}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 md:px-5 py-3 md:py-4 z-10">
        <span className="text-white font-semibold text-[14px] md:text-[16px] tracking-[0.02em]">
          {project.title}
        </span>
        <span className="text-[#AAAAAA] font-medium text-[13px] md:text-[15px] tracking-[0.02em] uppercase">
          {project.category}
        </span>
      </div>
    </div>
  );
};

// ── Project Details Modal ──────────────────────────────────────────────────
// ── Project Details Modal ──────────────────────────────────────────────────
const ProjectDetailsModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const images =
    project.project_images && project.project_images.length > 0
      ? project.project_images
      : [project.image || "/img/placeholder.png"];

  // ✅ Automatically resets to 0 whenever project.id changes because of the `key` prop on motion.div below.
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = images[activeIndex] ?? images[0];

  return (
<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        key={project.id}
        initial={{ y: 40, scale: 0.98, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 40, scale: 0.98, opacity: 0 }}
        transition={{ type: "spring", damping: 30, stiffness: 260 }}
        className="relative w-full max-w-[1150px] rounded-xl overflow-hidden shadow-2xl bg-[#0F0F11] text-white border border-[#222225] flex flex-col md:flex-row text-left"
        style={{ maxHeight: "92vh" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-[#1A1A1E]/80 text-neutral-400 hover:text-white border border-neutral-800 hover:bg-[#26262B] transition-all active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* ── LEFT: Image Showcase, Expanded Impact & Fixed Buttons ── */}
<div className="w-full md:w-[48%] bg-[#09090B] flex flex-col border-b md:border-b-0 md:border-r border-[#222225] overflow-y-auto" style={{ maxHeight: "92vh" }}>

          <div>
            {/* Main image */}
            <div className="relative w-full flex-shrink-0" style={{ aspectRatio: "16/11" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to bottom, transparent 65%, #09090B 100%)",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Counter badge */}
              <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
                {activeIndex + 1} / {images.length}
              </div>

              {/* Arrow buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveIndex((i) => (i - 1 + images.length) % images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-black/80 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
                  </button>
                  <button
                    onClick={() => setActiveIndex((i) => (i + 1) % images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-black/80 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail strip */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 px-5 py-3 overflow-x-auto flex-shrink-0 custom-scrollbar">
                {images.map((img, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`
                        relative flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200
                        ${isActive ? "border-[#FD6F00] ring-2 ring-[#FD6F00]/20" : "border-transparent opacity-50 hover:opacity-90"}
                      `}
                      style={{ width: 68, height: 42 }}
                    >
                      <Image src={img} alt={`Thumbnail ${idx + 1}`} fill sizes="68px" className="object-cover" />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Impact stats (কার্ডগুলোর হাইট এবং ভেতরের স্পেসিং বাড়ানো হয়েছে) */}
            {project.impact_stats && project.impact_stats.length > 0 && (
              <div className="px-5 mt-4">
                <h4 className="text-[11px] font-bold text-[#FD6F00] uppercase tracking-widest mb-3">
                  Project Impact
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {project.impact_stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-[#141416] border border-[#1F1F23] p-4 min-h-[85px] rounded-xl flex flex-col items-center text-center justify-center gap-1 hover:border-neutral-800 transition-colors"
                    >
                      <span className="text-xl font-black text-white tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-[10px] font-semibold text-neutral-400 leading-normal max-w-[110px]">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 p-5 border-t border-[#1F1F23] mt-6 bg-[#09090B]">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center h-[42px] flex items-center justify-center gap-2 rounded-xl font-bold text-xs text-white bg-[linear-gradient(94.36deg,#FD6F00_3.1%,#E46400_94.54%)] shadow-md hover:brightness-110 active:scale-[0.99] transition-all"
            >
              <span>Live Preview</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center h-[42px] flex items-center justify-center gap-2 rounded-xl font-bold text-xs text-white bg-transparent border border-[#26262B] hover:bg-[#141416] active:scale-[0.99] transition-all"
            >
              <span>View Source</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── RIGHT: Info & Case Study ── */}
        <div
          className="w-full md:w-[52%] p-6 md:p-8 overflow-y-auto flex flex-col bg-[#0F0F11]"
          style={{ maxHeight: "92vh" }}
        >
          <div className="flex-1">
            {/* Category + year */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-[10px] font-extrabold tracking-widest text-[#FD6F00] uppercase bg-[#FD6F00]/10 px-2.5 py-1 rounded border border-[#FD6F00]/20">
                {project.category}
              </span>
              {project.completed_in && (
                <span className="text-[12px] text-neutral-400 font-medium">
                  Completed in {project.completed_in}
                </span>
              )}
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
              {project.title}
            </h2>

            <p className="text-neutral-400 text-[13.5px] md:text-[14px] leading-relaxed mb-6 font-light">
              {project.description}
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-[12px] font-bold text-neutral-300 uppercase tracking-wider mb-3">
                Key Features
              </h4>
              {project.key_features_grid && project.key_features_grid.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.key_features_grid.map((feat, idx) => (
                    <div
                      key={idx}
                      className="bg-[#141416] border border-[#1F1F23] p-3.5 rounded-xl flex flex-col gap-1"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FD6F00] flex-shrink-0" />
                        <h5 className="text-[13px] font-bold text-white tracking-wide">{feat.title}</h5>
                      </div>
                      <p className="text-neutral-400 text-[11.5px] font-light leading-normal pl-3.5">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2 bg-[#141416] border border-[#1F1F23] p-4 rounded-xl">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-neutral-300 text-[13px] font-light flex items-start gap-2">
                      <span className="text-[#FD6F00]">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Challenges & Solutions */}
            {project.challenges_and_solutions && project.challenges_and_solutions.length > 0 && (
              <div className="mb-6">
                <h4 className="text-[12px] font-bold text-neutral-300 uppercase tracking-wider mb-3">
                  Challenges & Solutions
                </h4>
                <div className="space-y-3">
                  {project.challenges_and_solutions.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#141416]/50 border border-[#1F1F23] rounded-xl p-4 space-y-2.5"
                    >
                      <div className="flex gap-2 text-[12.5px] leading-relaxed">
                        <span className="text-red-400 font-bold flex-shrink-0">⚠️ Challenge:</span>
                        <p className="text-neutral-300 font-light">{item.challenge}</p>
                      </div>
                      <div className="flex gap-2 text-[12.5px] leading-relaxed pt-2 border-t border-[#1F1F23]/60">
                        <span className="text-green-400 font-bold flex-shrink-0">✅ Solution:</span>
                        <p className="text-neutral-300 font-light">{item.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-2">
              <h4 className="text-[12px] font-bold text-neutral-300 uppercase tracking-wider mb-2.5">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-[#141416] text-neutral-300 border border-[#222225] hover:border-neutral-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default Portfolio;