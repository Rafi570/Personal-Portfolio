import React from 'react';

interface SbuttonProps {
    text?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Sbutton: React.FC<SbuttonProps> = ({ 
    text = 'Secondary', 
    onClick, 
    type = 'button' 
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="
                /* Figma সাইজ ও লেআউট গাইডলাইন */
                w-[209px] h-[48px] 
                pt-[12px] pb-[12px] pl-[40px] pr-[40px]
                gap-[10px] opacity-100
                
                /* বর্ডার ও রেডিয়াস */
                border-[2px] border-[#959595] rounded-[8px]
                
                /* টেক্সট স্টাইল ও কালার */
                font-lato font-medium text-[16px] text-[#959595]
                flex items-center justify-center tracking-[0.03em]
                
                /* হোভার এবং সিলেক্ট ইফেক্ট (Figma Background অনুযায়ী) */
                transition-all duration-200 select-none
                hover:bg-[#959595] hover:text-[#FFFFFF]
                active:scale-[0.98]
            "
        >
            {text}
        </button>
    );
};

export default Sbutton;