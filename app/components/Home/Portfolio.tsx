"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pbutton from "../share/Pbutton";

type Category =
  | "All"
  | "Website Design"
  | "App Mobile Design"
  | "App Desktop"
  | "Braiding";

interface Project {
  id: number;
  name: string;
  category: Exclude<Category, "All">;
  image: string;
}

// লোড মোর টেস্ট করার সুবিধার্থে এখানে কিছু ডেটা বাড়িয়ে ৭টি বা তার বেশি করা হয়েছে
const PROJECTS: Project[] = [
  { id: 1, name: "Name Project", category: "Website Design",    image: "/img/image.png" },
  { id: 2, name: "Name Project", category: "App Mobile Design", image: "/img/image.png" },
  { id: 3, name: "Name Project", category: "App Desktop",       image: "/img/image.png" },
  { id: 4, name: "Name Project", category: "Website Design",    image: "/img/image.png" },
  { id: 5, name: "Name Project", category: "App Mobile Design", image: "/img/image.png" },
  { id: 6, name: "Name Project", category: "Braiding",          image: "/img/image.png" },
  { id: 7, name: "Name Project", category: "Website Design",    image: "/img/image.png" },
];

const CATEGORIES: Category[] = [
  "All",
  "Website Design",
  "App Mobile Design",
  "App Desktop",
  "Braiding",
];

const Portfolio = () => {
  const [active, setActive] = useState<Category>("All");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  // ক্যাটাগরি চেঞ্জ হলে দৃশ্যমান সংখ্যা আবার রিসেট হয়ে ৬ হবে
  const handleCategoryChange = (cat: Category) => {
    setActive(cat);
    setVisibleCount(6);
  };

  return (
    <section className="bg-[#FEFEFE] dark:bg-[#121212] py-12 md:py-20 px-4 md:px-8 font-lato overflow-hidden">
      <div className=" max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-10 w-full">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1E1E1E] dark:text-white leading-none tracking-[0.03em]">
            Portfolio
          </h2>
          <div className="w-20 h-[4px] bg-[linear-gradient(94.36deg,#FD6F00_3.1%,#E46400_94.54%)] mt-3 mb-4 rounded-full"></div>
        </div>

        {/* ── Filter tabs ── */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-14 w-full">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`
                  w-auto h-[54px] px-8 sm:px-10 py-[14px] rounded-[8px] gap-[10px]
                  font-lato font-bold text-[16px] tracking-[0.03em] capitalize text-center
                  transition-all duration-300 ease-in-out select-none active:scale-[0.98]
                  
                  ${
                    isActive
                      ? "bg-[linear-gradient(94.36deg,#FD6F00_3.1%,#E46400_94.54%)] text-[#FFFFFF] border-none shadow-md"
                      : "bg-[#FFFFFF14] text-[#C6C6C6] border-none hover:bg-[#FFFFFF24] hover:text-[#FFFFFF]"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full">
          {filtered.slice(0, visibleCount).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>


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

      </div>
    </section>
  );
};

// ── Project Card ──────────────────────────────────────────────────────────
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      className="
        relative rounded-2xl overflow-hidden cursor-pointer group
        bg-[#1E1E1E]
        border border-[#2A2A2A]
        transition-transform duration-300 hover:scale-[1.02]
      "
      style={{ aspectRatio: "4/3" }}
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 md:px-5 py-3 md:py-4">
        <span className="text-white font-semibold text-[14px] md:text-[16px] tracking-[0.02em]">
          {project.name}
        </span>
        <span className="text-[#AAAAAA] font-medium text-[13px] md:text-[15px] tracking-[0.02em]">
          {project.category}
        </span>
      </div>
    </div>
  );
};

export default Portfolio;