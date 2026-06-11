import React from 'react';
import { 
    SiNextdotjs, SiMongodb, SiReact, SiExpress, SiNodedotjs, 
    SiGithub, SiGit, SiCplusplus, SiPython, SiTypescript, 
    SiJavascript, SiDocker, SiPostgresql, SiMysql, SiTailwindcss, 
    SiFramer, SiGreensock 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const technologies = [
    { name: 'Next.js', icon: SiNextdotjs, color: 'hover:text-[#000000] dark:hover:text-white' },
    { name: 'React', icon: SiReact, color: 'hover:text-[#61DAFB]' },
    { name: 'TypeScript', icon: SiTypescript, color: 'hover:text-[#3178C6]' },
    { name: 'JavaScript', icon: SiJavascript, color: 'hover:text-[#F7DF1E]' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'hover:text-[#339933]' },
    { name: 'Express', icon: SiExpress, color: 'hover:text-[#000000] dark:hover:text-white' },
    { name: 'MongoDB', icon: SiMongodb, color: 'hover:text-[#47A248]' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'hover:text-[#4169E1]' },
    { name: 'MySQL', icon: SiMysql, color: 'hover:text-[#4479A1]' },
    { name: 'REST API', icon: TbApi, color: 'hover:text-[#FD6F00]' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'hover:text-[#06B6D4]' },
    { name: 'Framer Motion', icon: SiFramer, color: 'hover:text-[#E11D48]' },
    { name: 'GSAP', icon: SiGreensock, color: 'hover:text-[#88CE02]' },
    { name: 'Docker', icon: SiDocker, color: 'hover:text-[#2496ED]' },
    { name: 'Git', icon: SiGit, color: 'hover:text-[#F05032]' },
    { name: 'GitHub', icon: SiGithub, color: 'hover:text-[#181717] dark:hover:text-white' },
    { name: 'C / C++', icon: SiCplusplus, color: 'hover:text-[#00599C]' },
    { name: 'Python', icon: SiPython, color: 'hover:text-[#3776AB]' },
];

const TechnologyUsed = () => {
    return (
        <section className="py-16 px-4 max-w-6xl mx-auto font-lato">
            
            {/* সেকশন হেডার কন্টেইনার (flex ও items-center দিয়ে সবকিছু সেন্টারে আনা হয়েছে) */}
            <div className="flex flex-col items-center text-center mb-12 w-full">
                
                {/* রেসপন্সিভ হেডিং */}
                <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1E1E1E] dark:text-white leading-none tracking-[0.03em]">
                    Technologies I Use
                </h2>
                
                {/* আপনার বাটনের গ্রেডিয়েন্টের সাথে মিল রেখে নিচের আন্ডারলাইনটি */}
                <div className="w-20 h-[4px] bg-[linear-gradient(94.36deg,#FD6F00_3.1%,#E46400_94.54%)] mt-3 mb-4 rounded-full"></div>
                
                {/* রেসপন্সিভ প্যারাগ্রাফ (text-justify বাদ দিয়ে text-center ফিক্সড করা হয়েছে) */}
                <p className="font-lato font-medium text-[15px] sm:text-[17px] md:text-[20px] text-[#707070] dark:text-[#A0A0A0] leading-[1.6] tracking-[0.03em] text-center max-w-3xl px-2">
                   My core tech stack for building scalable, high-performance web applications and seamless digital experiences.
                </p>
            </div>

            {/* টেকনোলজি গ্রিড লেআউট */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {technologies.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                        <div
                            key={index}
                            className={`
                                flex flex-col items-center justify-center p-6
                                bg-white dark:bg-[#1E1E1E] 
                                border border-[#959595]/20 rounded-[12px]
                                shadow-sm transition-all duration-300 ease-in-out
                                cursor-pointer select-none
                                
                                /* হোভার ইফেক্টস */
                                hover:-translate-y-1 hover:shadow-md
                                hover:border-[#FD6F00]/50 text-[#959595]
                                ${tech.color}
                            `}
                        >
                            {/* লোগো সাইজ ও স্টাইল */}
                            <div className="text-4xl md:text-5xl mb-3 transition-colors duration-300">
                                <IconComponent />
                            </div>
                            
                            {/* টেকনোলজি নাম */}
                            <span className="text-sm md:text-base font-medium font-lato tracking-[0.02em]">
                                {tech.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default TechnologyUsed;