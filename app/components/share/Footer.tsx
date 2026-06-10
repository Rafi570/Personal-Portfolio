import React from 'react';

const Footer: React.FC = () => {
    const footerLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About me', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact me', href: '#contact' },
    ];

    return (
        <footer className="w-full bg-[#FFFFFF0A] text-[#FFFFFF] font-lato py-12 px-4 md:px-12 lg:px-20">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                
                {/* --- LOGO SECTION --- */}
                <div className="mb-8">
                    <span className="
                        font-k2d font-bold text-[28px] md:text-[34px]
                        leading-none tracking-[0.03em]
                        bg-[linear-gradient(90deg,#FA6E00_0%,#E60026_100%)]
                        bg-clip-text text-transparent select-none cursor-pointer
                    ">
                        HASAN RAFI AHMED
                    </span>
                </div>

                {/* --- NAVIGATION LINKS --- */}
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-8">
                    {footerLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="
                                font-lato font-medium text-[20px] 
                                leading-none tracking-[0.03em] text-[#959595]
                                transition-colors duration-200 hover:text-[#FD6F00]
                            "
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* --- SOCIAL MEDIA ICONS --- */}
                <div className="flex items-center gap-4 mb-8">
                    {/* Instagram */}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.65" fill="white" fillOpacity="0.04" stroke="#575757" strokeWidth="0.7"/>
                            <path d="M15.8 10H24.2C27.4 10 30 12.6 30 15.8V24.2C30 25.7383 29.3889 27.2135 28.3012 28.3012C27.2135 29.3889 25.7383 30 24.2 30H15.8C12.6 30 10 27.4 10 24.2V15.8C10 14.2617 10.6111 12.7865 11.6988 11.6988C12.7865 10.6111 14.2617 10 15.8 10ZM15.6 12C14.6452 12 13.7295 12.3793 13.0544 13.0544C12.3793 13.7295 12 14.6452 12 15.6V24.4C12 26.39 13.61 28 15.6 28H24.4C25.3548 28 26.2705 27.6207 26.9456 26.9456C27.6207 26.2705 28 25.3548 28 24.4V15.6C28 13.61 26.39 12 24.4 12H15.6ZM25.25 13.5C25.5815 13.5 25.8995 13.6317 26.1339 13.8661C26.3683 14.1005 26.5 14.4185 26.5 14.75C26.5 15.0815 26.3683 15.3995 26.1339 15.6339C25.8995 15.8683 25.5815 16 25.25 16C24.9185 16 24.6005 15.8683 24.3661 15.6339C24.1317 15.3995 24 15.0815 24 14.75C24 14.4185 24.1317 14.1005 24.3661 13.8661C24.6005 13.6317 24.9185 13.5 25.25 13.5ZM20 15C21.3261 15 22.5979 15.5268 23.5355 16.4645C24.4732 17.4021 25 18.6739 25 20C25 21.3261 24.4732 22.5979 23.5355 23.5355C22.5979 24.4732 21.3261 25 20 25C18.6739 25 17.4021 24.4732 16.4645 23.5355C15.5268 22.5979 15 21.3261 15 20C15 18.6739 15.5268 17.4021 16.4645 16.4645C17.4021 15.5268 18.6739 15 20 15ZM20 17C19.2044 17 18.4413 17.3161 17.8787 17.8787C17.3161 18.4413 17 19.2044 17 20C17 20.7956 17.3161 21.5587 17.8787 22.1213C18.4413 22.6839 19.2044 23 20 23C20.7956 23 21.5587 22.6839 22.1213 22.1213C22.6839 21.5587 23 20.7956 23 20C23 19.2044 22.6839 18.4413 22.1213 17.8787C21.5587 17.3161 20.7956 17 20 17Z" fill="#BABABA"/>
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.65" fill="white" fillOpacity="0.04" stroke="#575757" strokeWidth="0.7"/>
                            <g clipPath="url(#clip0_587_936)">
                                <path d="M26 11C26.7956 11 27.5587 11.3161 28.1213 11.8787C28.6839 12.4413 29 13.2044 29 14V26C29 26.7956 28.6839 27.5587 28.1213 28.1213C27.5587 28.6839 26.7956 29 26 29H14C13.2044 29 12.4413 28.6839 11.8787 28.1213C11.3161 27.5587 11 26.7956 11 26V14C11 13.2044 11.3161 12.4413 11.8787 11.8787C12.4413 11.3161 13.2044 11 14 11H26ZM26 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V26C13 26.2652 13.1054 26.5196 13.2929 26.7071C13.4804 26.8946 13.7348 27 14 27H26C26.2652 27 26.5196 26.8946 26.7071 26.7071C26.8946 26.5196 27 26.2652 27 26V14C27 13.7348 26.8946 13.4804 26.7071 13.2929C26.5196 13.1054 26.2652 13 26 13ZM16 18C16.2449 18 16.4813 18.09 16.6644 18.2527C16.8474 18.4155 16.9643 18.6397 16.993 18.883L17 19V24C16.9997 24.2549 16.9021 24.5 16.7272 24.6854C16.5522 24.8707 16.313 24.9822 16.0586 24.9972C15.8042 25.0121 15.5536 24.9293 15.3582 24.7657C15.1627 24.6021 15.0371 24.3701 15.007 24.117L15 24V19C15 18.7348 15.1054 18.4804 15.2929 18.2929C15.4804 18.1054 15.7348 18 16 18ZM19 17C19.2342 17 19.461 17.0821 19.6408 17.2322C19.8206 17.3822 19.9421 17.5906 19.984 17.821C20.1852 17.7043 20.3933 17.5998 20.607 17.508C21.274 17.223 22.273 17.066 23.175 17.349C23.648 17.499 24.123 17.779 24.475 18.256C24.79 18.681 24.96 19.198 24.994 19.779L25 20V24C24.9997 24.2549 24.9021 24.5 24.7272 24.6854C24.5522 24.8707 24.313 24.9822 24.0586 24.9972C23.8042 25.0121 23.5536 24.9293 23.3582 24.7657C23.1627 24.6021 23.0371 24.3701 23.007 24.117L23 24V20C23 19.67 22.92 19.516 22.868 19.445C22.7934 19.3522 22.6905 19.2862 22.575 19.257C22.227 19.147 21.726 19.205 21.393 19.347C20.893 19.561 20.435 19.897 20.123 20.208L20 20.34V24C19.9997 24.2549 19.9021 24.5 19.7272 24.6854C19.5522 24.8707 19.313 24.9822 19.0586 24.9972C18.8042 25.0121 18.5536 24.9293 18.3582 24.7657C18.1627 24.6021 18.0371 24.3701 18.007 24.117L18 24V18C18 17.7348 18.1054 17.4804 18.2929 17.2929C18.4804 17.1054 18.7348 17 19 17ZM16 15C16.2652 15 16.5196 15.1054 16.7071 15.2929C16.8946 15.4804 17 15.7348 17 16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17C15.7348 17 15.4804 16.8946 15.2929 16.7071C15.1054 16.5196 15 16.2652 15 16C15 15.7348 15.1054 15.4804 15.2929 15.2929C15.4804 15.1054 15.7348 15 16 15Z" fill="#BABABA"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_587_936">
                                    <rect width="24" height="24" fill="white" transform="translate(8 8)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>

                    {/* Github */}
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="19.65" fill="white" fillOpacity="0.04" stroke="#575757" strokeWidth="0.7"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M20 10C14.477 10 10 14.477 10 20C10 24.418 12.865 28.166 16.839 29.489C17.339 29.581 17.521 29.273 17.521 29.008C17.521 28.771 17.513 28.14 17.508 27.305C14.723 27.91 14.135 25.967 14.135 25.967C13.68 24.81 13.022 24.503 13.022 24.503C12.113 23.882 13.091 23.895 13.091 23.895C14.096 23.966 14.624 24.928 14.624 24.928C15.517 26.457 16.966 26.016 17.536 25.76C17.627 25.113 17.886 24.672 18.172 24.422C15.95 24.17 13.613 23.31 13.613 19.484C13.613 18.394 14.003 17.505 14.643 16.81C14.54 16.557 14.197 15.541 14.741 14.173C14.741 14.173 15.579 13.905 17.491 15.197C18.288 14.975 19.143 14.865 19.993 14.861C20.842 14.865 21.698 14.975 22.497 15.197C24.407 13.905 25.243 14.173 25.243 14.173C25.789 15.541 26.446 16.557 26.344 16.81C26.986 17.505 27.373 18.394 27.373 19.484C27.373 23.32 25.033 24.167 22.804 24.414C23.162 24.722 23.481 25.33 23.481 26.26C23.481 27.596 23.469 28.675 23.469 29.008C23.469 29.276 23.649 29.586 24.156 29.487C28.127 28.161 31 24.416 31 20C31 14.477 26.523 10 20 10Z" fill="#BABABA"/>
                        </svg>
                    </a>
                </div>

                {/* --- VERTICAL CONTACT & MAIL ROW (Figma কাস্টমাইজড) --- */}
                <div 
                    style={{ angle: '0deg' }}
                    className="
                        /* রিকোয়ারমেন্ট অনুযায়ী সর্বোচ্চ উইডথ ও প্যাডিং */
                        w-full max-w-[593px] min-h-[35px] opacity-100
                        pt-[16px] px-[24px] md:px-[120px] pb-4
                        gap-[10px] flex flex-col items-center justify-center
                        
                        /* টপ বর্ডার সেটআপ */
                        border-b border-[#707070]
                    "
                >
                    {/* মেইল লাইন */}
                    <div className="flex items-center gap-2 text-[16px] md:text-[18px] text-[#959595] font-medium tracking-[0.03em]">
                        {/* তোমার দেওয়া Mail SVG */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 6L12 13L2 6" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <a href="mailto:hasan.cse570@gmail.com" className="hover:text-[#FD6F00] transition-colors">
                            hasan.cse570@gmail.com
                        </a>
                    </div>

                    {/* কন্টাক্ট লাইন (ফোন নাম্বারসমূহ) */}
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[16px] md:text-[18px] text-[#959595] font-medium tracking-[0.03em]">
                        <div className="flex items-center gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                <path d="M22 16.9201V19.9201C22.0011 20.1986 21.9441 20.4743 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.9201C16.7428 21.5857 13.787 20.5342 11.19 18.8501C8.77382 17.3148 6.72533 15.2663 5.18999 12.8501C3.49997 10.2413 2.44824 7.27109 2.11999 4.1801C2.095 3.90356 2.12787 3.62486 2.21649 3.36172C2.30512 3.09859 2.44756 2.85679 2.63476 2.65172C2.82196 2.44665 3.0498 2.28281 3.30379 2.17062C3.55777 2.05843 3.83233 2.00036 4.10999 2.0001H7.10999C7.5953 1.99532 8.06579 2.16718 8.43376 2.48363C8.80173 2.80008 9.04207 3.23954 9.10999 3.7201C9.23662 4.68016 9.47144 5.62282 9.80999 6.5301C9.94454 6.88802 9.97366 7.27701 9.8939 7.65098C9.81415 8.02494 9.62886 8.36821 9.35999 8.6401L8.08999 9.9101C9.51355 12.4136 11.5864 14.4865 14.09 15.9101L15.36 14.6401C15.6319 14.3712 15.9751 14.1859 16.3491 14.1062C16.7231 14.0264 17.1121 14.0556 17.47 14.1901C18.3773 14.5286 19.3199 14.7635 20.28 14.8901C20.7658 14.9586 21.2094 15.2033 21.5265 15.5776C21.8437 15.9519 22.0122 16.4297 22 16.9201Z" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <a href="tel:01771047518" className="hover:text-[#FD6F00] transition-colors">01771047518</a>
                        </div>
                        <span className="hidden md:inline text-gray-600">|</span>
                        <a href="tel:01644862432" className="hover:text-[#FD6F00] transition-colors">01644862432</a>
                    </div>
                </div>

                {/* --- SEPARATOR LINE --- */}

                {/* --- COPYRIGHT TEXT --- */}
                <div className="w-full text-center mt-2">
                    <p className="font-lato text-[16px] text-[#959595] tracking-[0.03em]">
                        © {new Date().getFullYear()} <span className="text-[#FD6F00] font-semibold">HASAN RAFI AHMED</span> All Rights Reserved, Inc.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;