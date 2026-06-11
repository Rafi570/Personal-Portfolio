import React, { ButtonHTMLAttributes } from 'react';

interface SbuttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
}

const Sbutton: React.FC<SbuttonProps> = ({ 
    text = 'Secondary', 
    type = 'button',
    className = "",
    children,
    ...props 
}) => {
    return (
        <button
            type={type}
            {...props}
            className={`
                /* Figma সাইজ ও লেআউট গাইডলাইন */
                w-full h-[48px] px-6 sm:px-10 gap-[10px] opacity-100
                flex items-center justify-center
                
                /* বর্ডার ও রেডিয়াস */
                border-[2px] border-[#959595] rounded-[8px] outline-none
                
                /* টেক্সট স্টাইল ও কালার (Responsive Text) */
                font-lato font-medium text-[14px] sm:text-[16px] text-[#959595]
                tracking-[0.03em] text-center
                
                /* হোভার এবং সিলেক্ট ইফেক্ট */
                transition-all duration-200 select-none cursor-pointer
                hover:bg-[#959595] hover:text-[#FFFFFF]
                active:scale-[0.98]

                /* Extra Custom Classes */
                ${className}
            `}
        >
            {children || text}
        </button>
    );
};

export default Sbutton;