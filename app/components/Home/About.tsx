// import React from "react";
// import Image from "next/image";
// import myImage from "../../../public/img/myphoto.png";
// import Pbutton from "../share/Pbutton";

// const About = () => {
//   const DownloadIcon = ({ className }: { className?: string }) => (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//     >
//       <path d="M12.1222 15.4361L12.1222 3.39511" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//       <path d="M15.0382 12.5084L12.1222 15.4364L9.20619 12.5084" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//       <path d="M16.755 8.12802H17.688C19.723 8.12802 21.372 9.77702 21.372 11.813V16.697C21.372 18.727 19.727 20.372 17.697 20.372L6.55699 20.372C4.52199 20.372 2.87199 18.722 2.87199 16.687V11.802C2.87199 9.77302 4.51799 8.12802 6.54699 8.12802L7.48899 8.12802" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//     </svg>
//   );

//   return (
//     <section className="bg-[#FEFEFE] dark:bg-[#121212] py-20 px-4 md:px-8 font-lato overflow-hidden">
//       <div className="max-w-6xl mx-auto flex flex-col items-center">

//         {/* ১. সেকশন হেডার পার্ট */}
//         <div className="flex flex-col items-center text-center mb-16 w-full">
//           <h2 className="text-[34px] md:text-[40px] font-bold text-[#1E1E1E] dark:text-white leading-none tracking-[0.03em] mb-4">
//             About Me
//           </h2>
//           <p className="font-lato font-medium text-[16px] md:text-[20px] text-[#707070] dark:text-[#A0A0A0] leading-[1.6] tracking-[0.03em] text-center capitalize max-w-xl">
//             User Interface And User Experience And Also Video Editing
//           </p>
//         </div>

//         {/* ২. মেইন লেআউট */}
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full">

//           {/* বাম পাশ: ইমেজ সেকশন (Figma Dimensions 523x676 অনুপাত বজায় রেখে) */}
//           <div className="flex justify-center items-center w-full lg:w-1/2 h-fit">
//             <div
//               style={{
//                 borderTopLeftRadius: "261.5px",
//                 borderTopRightRadius: "261.5px",
//                 borderBottomRightRadius: "12px",
//                 borderBottomLeftRadius: "12px",
//               }}
//               /* মেইন আর্চ ফ্রেমের সাইজ বড় করা হয়েছে (Figma-র সর্বোচ্চ ৫২৩ পিক্সেল পর্যন্ত রেসপন্সিভলি ছড়াবে) */
//               className="relative bg-gray-100/80 dark:bg-[#FFFFFF0A]  w-[280px] h-[362px] sm:w-[360px] sm:h-[465px] md:w-[440px] md:h-[568px] lg:w-[480px] lg:h-[620px] max-w-[523px] max-h-[676px] flex items-end justify-center overflow-visible"
//             >

//               <div className="relative w-full h-full transform scale-115 origin-bottom overflow-visible flex items-end justify-center">
//                 <Image
//                   src={myImage}
//                   alt="Hasan Rafi Ahmed Portfolio Photo"
//                   priority
//                   fill
//                   sizes="(max-w-523px) 100vw, 523px"
//                   className="object-contain object-bottom select-none pointer-events-none"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* ডান পাশ: কন্টেন্ট সেকশন */}
//           <div className="w-full lg:w-1/2 flex flex-col items-start space-y-8">
//             <div className="font-lato font-medium text-[16px] md:text-[20px] text-[#959595] dark:text-[#CCCCCC] leading-[1.9] tracking-normal text-justify space-y-6">
//               <p>
//                 I am a Computer Science and Engineering student passionately
//                 driving digital realms through robust systems. With deep
//                 expertise in foundational algorithms, I have successfully solved
//                 over 500 competitive programming problems across platforms like
//                 LeetCode, HackerRank, Beecrowd, and Codeforces, sharpening my
//                 analytical and engineering capabilities.
//               </p>
//               <p>
//                 My solid grasp of core Data Structures and Algorithms—including
//                 arrays, linked lists, trees, graphs, dynamic programming, and
//                 greedy techniques—empowers me to write clean and optimal code.
//                 Furthermore, participating in the prestigious ICPC Dhaka
//                 Regional 2024 has reinforced my ability to perform under high
//                 pressure and effectively manage technical architecture within
//                 high-velocity teams.
//               </p>
//             </div>

//             <div className="w-full sm:w-auto pt-4">
//               <Pbutton logo={DownloadIcon} className="w-full sm:w-auto font-medium">
//                 Download CV
//               </Pbutton>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import myImage from "../../../public/img/myphoto.png";
import Pbutton from "../share/Pbutton";

// Figma source dimensions
const FIGMA_OUTER_W = 566;
const FIGMA_OUTER_H = 808;

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
        <div className="flex flex-col items-center text-center  md:mb-6 w-full">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1E1E1E] dark:text-white leading-none tracking-[0.03em] mb-3 md:mb-4">
            About Me
          </h2>
          <p className="font-lato font-medium text-[14px] sm:text-[16px] md:text-[20px] text-[#707070] dark:text-[#A0A0A0] leading-[1.6] tracking-[0.03em] text-center capitalize max-w-xl">
            User Interface And User Experience And Also Video Editing
          </p>
        </div>

        {/* ── Main Layout ── */}
        <div className="flex flex-col lg:flex-row items-center w-full gap-8 lg:gap-13">
          {/* ── LEFT: Image column ── */}
          {/*
            On lg+: exact Figma 566×808.
            Below lg: this div takes full row width; scale compresses the
            inner 566×808 canvas proportionally via transform.
          */}
          <div
            ref={wrapperRef}
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
          </div>

          {/* ── RIGHT: Content column ── */}
          <div className="flex-1 w-full flex flex-col items-start space-y-6 md:space-y-8">
            <div className="font-lato font-medium text-[15px] sm:text-[17px] md:text-[20px] text-[#959595] dark:text-[#CCCCCC] leading-[1.8] md:leading-[1.9] tracking-normal text-justify space-y-4 md:space-y-6">
              <p>
                I am a Computer Science and Engineering student passionately
                driving digital realms through robust systems. With deep
                expertise in foundational algorithms, I have successfully solved
                over 500 competitive programming problems across platforms like
                LeetCode, HackerRank, Beecrowd, and Codeforces, sharpening my
                analytical and engineering capabilities.
              </p>
              <p>
                My solid grasp of core Data Structures and Algorithms—including
                arrays, linked lists, trees, graphs, dynamic programming, and
                greedy techniques—empowers me to write clean and optimal code.
                Furthermore, participating in the prestigious ICPC Dhaka
                Regional 2024 has reinforced my ability to perform under high
                pressure and effectively manage technical architecture within
                high-velocity teams.
              </p>
            </div>

            <div className="w-full sm:w-auto pt-2 md:pt-4">
              <Pbutton
                logo={DownloadIcon}
                className="w-full sm:w-auto font-medium"
              >
                Download CV
              </Pbutton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
