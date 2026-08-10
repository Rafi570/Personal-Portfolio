"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Award } from "lucide-react";

// ekhane tomar real certificate gula boshao — title, issuer, date, image
const certificates = [
  {
    title: "Complete Web Development",
    issuer: "Udemy",
    date: "2024",
    image: "/img/certificates/cert-1.png",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Coursera",
    date: "2023",
    image: "/img/certificates/cert-2.png",
  },
  {
    title: "React & Next.js Mastery",
    issuer: "Udemy",
    date: "2024",
    image: "/img/certificates/cert-3.png",
  },
  {
    title: "ICPC Dhaka Regional 2024",
    issuer: "ICPC",
    date: "2024",
    image: "/img/certificates/cert-4.png",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "2023",
    image: "/img/certificates/cert-5.png",
  },
  {
    title: "Docker & Containerization",
    issuer: "Udemy",
    date: "2024",
    image: "/img/certificates/cert-6.png",
  },
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ekta card — marquee row e use hobe
const CertCard = ({ cert }: { cert: (typeof certificates)[number] }) => (
  <div
    style={{ background: "#FFFFFF0A" }}
    className="flex-shrink-0 w-[280px] sm:w-[320px] rounded-[12px] backdrop-blur-sm border border-gray-800/40 overflow-hidden select-none transition-colors duration-300 hover:border-[#FD6F00]/50"
  >
    {/* thumbnail */}
    <div className="relative w-full h-[160px] sm:h-[180px] bg-[#1E1E1E]">
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover pointer-events-none"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>

    {/* info */}
    <div className="p-4 flex items-start gap-3">
      <div className="w-9 h-9 shrink-0 rounded-full bg-[#FD6F00]/10 flex items-center justify-center mt-0.5">
        <Award size={16} className="text-[#FD6F00]" />
      </div>
      <div className="min-w-0">
        <h3 className="font-lato font-bold text-[14px] text-[#1E1E1E] dark:text-white leading-snug truncate">
          {cert.title}
        </h3>
        <p className="font-lato font-medium text-[12px] text-[#959595] mt-1">
          {cert.issuer} &middot; {cert.date}
        </p>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({
  items,
  direction = "left",
  speed = 40,
}: {
  items: typeof certificates;
  direction?: "left" | "right";
  speed?: number;
}) => {
  // seamless loop er jonno list ta duplicate kora hoise
  const looped = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden group">
      {/* edge fade mask */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 z-10 bg-gradient-to-r from-[#FEFEFE] dark:from-[#121212] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 z-10 bg-gradient-to-l from-[#FEFEFE] dark:from-[#121212] to-transparent" />

      <div
        className="flex gap-5 w-max group-hover:[animation-play-state:paused]"
        style={{
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${speed}s linear infinite`,
        }}
      >
        {looped.map((cert, idx) => (
          <CertCard key={idx} cert={cert} />
        ))}
      </div>
    </div>
  );
};

const Certificates = () => {
  const half = Math.ceil(certificates.length / 2);
  const rowOne = certificates.slice(0, half);
  const rowTwo = certificates.slice(half);

  return (
    <section className="py-16 max-w-[1440px] mx-auto font-lato overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        variants={headerVariants}
        className="flex flex-col items-center text-center mb-12 w-full px-4"
      >
        <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1E1E1E] dark:text-white leading-none tracking-[0.03em]">
          Certifications
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="h-[4px] bg-[linear-gradient(94.36deg,#FD6F00_3.1%,#E46400_94.54%)] mt-3 mb-4 rounded-full"
        />

        <p className="font-lato font-medium text-[15px] sm:text-[17px] md:text-[20px] text-[#707070] dark:text-[#A0A0A0] leading-[1.6] tracking-[0.03em] text-center max-w-3xl">
          A collection of courses and competitions that shaped my skills along the way.
        </p>
      </motion.div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-5"
      >
        <MarqueeRow items={rowOne} direction="left" speed={32} />
        {rowTwo.length > 0 && (
          <MarqueeRow items={rowTwo} direction="right" speed={36} />
        )}
      </motion.div>

      <style jsx global>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Certificates;