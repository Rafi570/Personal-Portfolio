"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

// ekhane tomar real experience gula boshao — title, company, duration, location, description, tech
const experiences = [
  {
    role: "Full Stack Developer",
    company: "Company Name",
    duration: "Jan 2024 — Present",
    location: "Dhaka, Bangladesh",
    description:
      "Building and maintaining scalable web applications using Next.js, Node.js and MongoDB. Collaborating with the design team to ship pixel-perfect, high-performance UI.",
    tech: ["Next.js", "React", "Node.js", "MongoDB"],
  },
  {
    role: "Frontend Developer",
    company: "Company Name",
    duration: "Jun 2022 — Dec 2023",
    location: "Remote",
    description:
      "Developed responsive interfaces with React and Tailwind CSS, improved page load performance and worked closely with backend engineers to integrate REST APIs.",
    tech: ["React", "Tailwind CSS", "TypeScript", "REST API"],
  },
  {
    role: "Junior Web Developer",
    company: "Company Name",
    duration: "Jan 2021 — May 2022",
    location: "Barishal, Bangladesh",
    description:
      "Started my journey building small business websites and internal tools, learning the fundamentals of clean, maintainable code.",
    tech: ["JavaScript", "HTML/CSS", "Git"],
  },
];

const Experience = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto font-lato">
      {/* Section Header — same pattern as TechnologyUsed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-16 w-full"
      >
        <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1E1E1E] dark:text-white leading-none tracking-[0.03em]">
          My Experience
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="h-[4px] bg-[linear-gradient(94.36deg,#FD6F00_3.1%,#E46400_94.54%)] mt-3 mb-4 rounded-full"
        />

        <p className="font-lato font-medium text-[15px] sm:text-[17px] md:text-[20px] text-[#707070] dark:text-[#A0A0A0] leading-[1.6] tracking-[0.03em] text-center max-w-3xl px-2">
          A quick look at where I&apos;ve worked and what I&apos;ve built along the way.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* vertical line track (dim base) */}
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#959595]/15 md:-translate-x-1/2" />
        {/* vertical line — grows as you scroll */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FD6F00] via-[#FD6F00]/60 to-transparent md:-translate-x-1/2"
        />

        <div className="flex flex-col gap-10 md:gap-14">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* dot on the line */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.3 }}
                  className="absolute left-[8px] md:left-1/2 top-1 w-[16px] h-[16px] rounded-full bg-[#FD6F00] border-4 border-white dark:border-[#0F0F0F] md:-translate-x-1/2 z-10 cursor-pointer"
                >
                  <span className="absolute inset-0 rounded-full bg-[#FD6F00] animate-ping opacity-40" />
                </motion.div>

                {/* spacer for md layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* card */}
                <div className="pl-10 md:pl-0 md:w-1/2">
                  <div
                    className={`md:mx-8 ${
                      isLeft ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -6, scale: 1.015 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{ background: "#FFFFFF0A" }}
                      className="rounded-[8px] backdrop-blur-sm border border-gray-800/40 p-5 md:p-6 select-none transition-colors duration-300 hover:border-[#FD6F00]/50"
                    >
                      {/* duration badge */}
                      <div
                        className={`flex items-center gap-2 mb-3 ${
                          isLeft ? "md:justify-start" : "md:justify-end"
                        }`}
                      >
                        <Calendar size={14} className="text-[#FD6F00]" />
                        <span className="font-lato font-medium text-[12px] md:text-[13px] tracking-[3%] text-[#FD6F00]">
                          {exp.duration}
                        </span>
                      </div>

                      {/* role */}
                      <h3 className="font-lato font-black text-[18px] md:text-[22px] leading-tight tracking-[3%] bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] bg-clip-text text-transparent mb-1">
                        {exp.role}
                      </h3>

                      {/* company + location */}
                      <div
                        className={`flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-[#959595] ${
                          isLeft ? "md:justify-start" : "md:justify-end"
                        }`}
                      >
                        <span className="flex items-center gap-1.5 font-lato font-semibold text-[13px] md:text-[14px]">
                          <Briefcase size={13} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5 font-lato font-medium text-[13px] md:text-[14px]">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>

                      {/* description */}
                      <p className="font-lato font-medium text-[13px] md:text-[15px] text-[#707070] dark:text-[#A0A0A0] leading-[1.6] tracking-[0.03em] mb-4">
                        {exp.description}
                      </p>

                      {/* tech tags */}
                      <div
                        className={`flex flex-wrap gap-2 ${
                          isLeft ? "md:justify-start" : "md:justify-end"
                        }`}
                      >
                        {exp.tech.map((t, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
                            className="font-lato font-medium text-[11px] md:text-[12px] tracking-[0.02em] text-[#959595] border border-[#959595]/30 rounded-full px-3 py-1"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;