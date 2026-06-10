import React, { ComponentType, ButtonHTMLAttributes } from 'react';

// বাটনের প্রপসের জন্য টাইপ ডিফাইন করা হলো
interface PbuttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    logo?: ComponentType<{ className?: string }>;
}

const Pbutton: React.FC<PbuttonProps> = ({ 
    text = "Button", 
    logo: LogoIcon, 
    type = "button", 
    className = "", 
    ...props 
}) => {
    return (
        <button
            type={type}
            {...props}
            className={`
                /* Layout & Sizing */
                inline-flex items-center justify-center
                min-w-[141px] min-h-[43px]
                py-[12px] px-[40px] gap-[10px]
                
                /* Border & Shapes */
                rounded-[8px] border-none outline-none
                
                /* Background & Opacity */
                bg-[linear-gradient(94.36deg,#FD6F00_3.1%,#E46400_94.54%)]
                opacity-100 rotate-0
                
                /* Text Styles */
                text-[#FFFFFF] font-['Lato',_sans-serif] font-bold text-[16px] 
                leading-none tracking-[0.03em] text-justify
                
                /* Interactive States */
                hover:opacity-90 active:scale-[0.98] transition-all duration-200
                cursor-pointer select-none
                
                /* Extra Custom Classes */
                ${className}
            `}
        >
            {/* লোগো/আইকন থাকলে তা রেন্ডার হবে */}
            {LogoIcon && (
                <span className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
                    <LogoIcon className="w-full h-full object-contain" />
                </span>
            )}
            
            {/* বাটন টেক্সট */}
            <span>{text}</span>
        </button>
    );
};

export default Pbutton;