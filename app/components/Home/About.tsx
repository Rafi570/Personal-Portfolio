"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import myImage from "../../../public/img/myphoto.png";
import Pbutton from "../share/Pbutton";

// Figma source dimensions
const FIGMA_OUTER_W = 566;
const FIGMA_OUTER_H = 808;

// paragraph gula ekta pore ekta ashbe (stagger)
const textContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const About = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current) return;
      // Available width = parent width, capped at Figma width
      const available = Math.min(
        wrapperRef.current.parentElement?.offsetWidth ?? FIGMA_OUTER_W,
        FIGMA_OUTER_W,
      );
      setScale(available / FIGMA_OUTER_W);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scaledH = FIGMA_OUTER_H * scale;

  const DownloadIcon = ({ className }: { className?: string }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.1222 15.4361L12.1222 3.39511"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0382 12.5084L12.1222 15.4364L9.20619 12.5084"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.755 8.12802H17.688C19.723 8.12802 21.372 9.77702 21.372 11.813V16.697C21.372 18.727 19.727 20.372 17.697 20.372L6.55699 20.372C4.52199 20.372 2.87199 18.722 2.87199 16.687V11.802C2.87199 9.77302 4.51799 8.12802 6.54699 8.12802L7.48899 8.12802"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className="bg-[#FEFEFE] dark:bg-[#121212] py-5 md:py-20 px-4 md:px-8 font-lato overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center  md:mb-6 w-full"
        >
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1E1E1E] dark:text-white leading-none tracking-[0.03em]">
            About Me
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="h-[4px] bg-[linear-gradient(94.36deg,#FD6F00_3.1%,#E46400_94.54%)] mt-3 mb-4 rounded-full"
          ></motion.div>
          <p className="font-lato font-medium text-[14px] sm:text-[16px] md:text-[20px] text-[#707070] dark:text-[#A0A0A0] leading-[1.6] tracking-[0.03em] text-center capitalize max-w-xl">
            User Interface And User Experience And Also Video Editing
          </p>
        </motion.div>

        {/* ── Main Layout ── */}
        <div className="flex flex-col lg:flex-row items-center w-full gap-8 lg:gap-13">
          {/* ── LEFT: Image column ── */}
          {/*
            On lg+: exact Figma 566×808.
            Below lg: this div takes full row width; scale compresses the
            inner 566×808 canvas proportionally via transform.
          */}
          <motion.div
            ref={wrapperRef}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-shrink-0 w-full lg:w-auto"
            /* Height collapses to scaled value on small screens,
               stays 808px on large (scale === 1) */
            style={{ height: `${scaledH}px`, maxWidth: `${FIGMA_OUTER_W}px` }}
          >
            {/*
              Inner canvas: always 566×808 in its own coordinate space.
              transform-origin top-left so it scales from the top-left corner.
            */}
            <div
              style={{
                width: `${FIGMA_OUTER_W}px`,
                height: `${FIGMA_OUTER_H}px`,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                position: "relative",
              }}
            >
              {/* ── Pill background: 523×676, top:132 left:22 ── */}
              <div
                style={{
                  position: "absolute",
                  top: "132px",
                  left: "22px",
                  width: "523px",
                  height: "676px",
                  borderTopLeftRadius: "261.5px",
                  borderTopRightRadius: "261.5px",
                  borderBottomRightRadius: "12px",
                  borderBottomLeftRadius: "12px",
                  background: "#FFFFFF0A",
                  zIndex: 0,
                }}
              />

              {/* ── Photo: top:0, left:22, 523×808 — head overflows pill ── */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "22px",
                  width: "523px",
                  height: "810px",
                  zIndex: 1,
                }}
              >
                <Image
                  src={myImage}
                  alt="Hasan Rafi Ahmed Portfolio Photo"
                  priority
                  fill
                  sizes={`(max-width: 1024px) ${Math.round(523 * scale)}px, 523px`}
                  className="object-contain object-bottom select-none pointer-events-none"
                />
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Content column ── */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 w-full flex flex-col items-start space-y-6 md:space-y-8"
          >
            <div className="font-lato font-medium text-[15px] sm:text-[17px] md:text-[20px] text-[#959595] dark:text-[#CCCCCC] leading-[1.8] md:leading-[1.9] tracking-normal text-justify space-y-4 md:space-y-6">
              <motion.p variants={fadeUp}>
                I am a Computer Science and Engineering student passionately
                driving digital realms through robust systems. With deep
                expertise in foundational algorithms, I have successfully solved
                over 500 competitive programming problems across platforms like
                LeetCode, HackerRank, Beecrowd, and Codeforces, sharpening my
                analytical and engineering capabilities.
              </motion.p>
              <motion.p variants={fadeUp}>
                My solid grasp of core Data Structures and Algorithms—including
                arrays, linked lists, trees, graphs, dynamic programming, and
                greedy techniques—empowers me to write clean and optimal code.
                Furthermore, participating in the prestigious ICPC Dhaka
                Regional 2024 has reinforced my ability to perform under high
                pressure and effectively manage technical architecture within
                high-velocity teams.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="w-full sm:w-auto pt-2 md:pt-4">
              <Pbutton
                logo={DownloadIcon}
                className="w-full sm:w-auto font-medium"
              >
                Download CV
              </Pbutton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;