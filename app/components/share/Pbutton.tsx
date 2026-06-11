import React, { ComponentType, ButtonHTMLAttributes } from 'react';

interface PbuttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    logo?: ComponentType<{ className?: string }>;
}

const Pbutton: React.FC<PbuttonProps> = ({ 
    text = "Button", 
    logo: LogoIcon, 
    type = "button", 
    className = "", 
    children, 
    ...props 
}) => {
    return (
        <button
            type={type}
            {...props}
            className={`
                /* Layout & Sizing */
                inline-flex items-center justify-center
                w-full h-[48px] px-6 sm:px-10 gap-2.5
                
                /* Border & Shapes */
                rounded-[8px] border-none outline-none
                
                /* Background & Opacity */
                bg-[linear-gradient(94.36deg,#FD6F00_3.1%,#E46400_94.54%)]
                opacity-100 rotate-0
                
                /* Text Styles (Responsive Text) */
                text-[#FFFFFF] font-lato text-[14px] sm:text-[16px] font-medium
                leading-none tracking-[0.03em] text-center
                
                /* Interactive States */
                hover:opacity-90 active:scale-[0.98] transition-all duration-200
                cursor-pointer select-none
                
                /* Extra Custom Classes */
                ${className}
            `}
        >
            {/* লোগো/আইকন */}
            {LogoIcon && (
                <span className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
                    <LogoIcon className="w-full h-full object-contain" />
                </span>
            )}
            
            {/* বাটন টেক্সট */}
            <span>{children || text}</span>
        </button>
    );
};

export default Pbutton;