"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Pbutton from "../share/Pbutton";

// ── Types (JSON ডাটা স্ট্রাকচার অনুযায়ী শতভাগ টাইপ-সেফ) ──────────────────
interface Project {
  id: number;
  title: string;       // JSON-এর title
  category: string;    // JSON-এর category
  description: string;
  features: string[];
  technologies: string[];
  challenges_solved: string[];
  role: string;
  image: string;       // JSON-এর image URL
  liveLink: string;
  githubLink: string;
}

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [active, setActive] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(true);

  // ── ১. public/data/project.json থেকে ডাটা ফেচ করা ──
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        {/* আপনার সঠিক পাথ: /data/project.json */}
        const res = await fetch("/data/project.json");
        if (res.ok) {
          const data: Project[] = await res.json();
          setProjects(data);

          {/* ডাটার ক্যাটাগরিগুলো থেকে ইউনিক বাটন লিস্ট তৈরি করা */}
          const uniqueCategories = Array.from(
            new Set(data.map((p) => p.category))
          );
          // "All" বাটনের সাথে ডাটা থেকে আসা ক্যাটাগরিগুলো যুক্ত করা হলো
          setCategories(["All", ...uniqueCategories]);
        } else {
          console.error("project.json ফাইলটি /public/data/ ডিরেক্টরিতে পাওয়া যায়নি।");
        }
      } catch (error) {
        console.error("ডাটা লোড করার সময় এরর ঘটেছে:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // ── ২. ফিল্টারিং লজিক (Case Insensitive) ──
  const filtered =
    active === "All"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === active.toLowerCase()
        );

  // ক্যাটাগরি চেঞ্জ হ্যান্ডলার
  const handleCategoryChange = (cat: string) => {
    setActive(cat);
    setVisibleCount(6); // ক্যাটাগরি বদলালে ভিউ লিমিট আবার ৬ এ চলে যাবে
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
      <div className=" max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-10 w-full">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1E1E1E] dark:text-white leading-none tracking-[0.03em]">
            Portfolio
          </h2>
          <div className="w-20 h-[4px] bg-[linear-gradient(94.36deg,#FD6F00_3.1%,#E46400_94.54%)] mt-3 mb-4 rounded-full"></div>
        </div>

        {/* ── Filter tabs (JSON থেকে জেনারেট হওয়া ডায়নামিক বাটন) ── */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-14 w-full">
          {categories.map((cat) => {
            const isActive = active.toLowerCase() === cat.toLowerCase();
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

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full">
          {filtered.slice(0, visibleCount).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* ── Load More Button ── */}
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

// ── Project Card (JSON ডাটা বাইন্ডিং) ───────────────────────────────────────
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
      {/* JSON থেকে আসা ইমেজের লিংক */}
      <Image
        src={project.image}
        alt={project.title}
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

      {/* টেক্সট বার */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 md:px-5 py-3 md:py-4 z-10">
        {/* প্রজেক্টের নাম (JSON title) */}
        <span className="text-white font-semibold text-[14px] md:text-[16px] tracking-[0.02em]">
          {project.title}
        </span>
        {/* প্রজেক্টের ক্যাটাগরি (JSON category) */}
        <span className="text-[#AAAAAA] font-medium text-[13px] md:text-[15px] tracking-[0.02em] uppercase">
          {project.category}
        </span>
      </div>
    </div>
  );
};

export default Portfolio;