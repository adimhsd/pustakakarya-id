import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION, COMPANY_INFO } from '../../constants';
import ThemeToggle from '../ui/ThemeToggle';
import clsx from 'clsx';

const WhatsAppIcon = ({ size = 16 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .15 5.34.15 11.91c0 2.1.55 4.15 1.59 5.96L0 24l6.31-1.65a11.86 11.86 0 0 0 5.75 1.47h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.46-8.43Zm-8.46 18.32h-.01a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.87 9.87 0 0 1-1.52-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.88-9.89 9.88Zm5.43-7.41c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
);

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed w-full z-50 transition-all duration-300",
                isScrolled
                    ? "bg-[var(--bg-navbar)] backdrop-blur-[16px] border-b border-line py-2.5 md:py-3"
                    : "bg-transparent py-3 md:py-3.5"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2.5 font-bold text-lg md:text-2xl tracking-tight text-ubuntu-orange">
                    <img
                        src="/favicon.png"
                        alt="Logo PT Digital Pustaka Karya Indonesia"
                        className="w-8 h-8 md:w-9 md:h-9 rounded-full object-contain"
                    />
                    <span>
                        DIGITAL <span className="text-ink-primary">PUSTAKA KARYA</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 font-medium text-sm text-ink-secondary">
                    {NAVIGATION.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="hover:text-ubuntu-orange transition"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <ThemeToggle />
                    <a
                        href={COMPANY_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center justify-center gap-2 bg-ubuntu-orange hover:bg-ubuntu-orangeHover active:bg-ubuntu-orangeActive text-white px-5 py-2.5 rounded-[8px] text-sm font-medium transition shadow-[0_6px_16px_-4px_rgba(233,84,32,0.45)]"
                    >
                        <WhatsAppIcon size={16} />
                        <span>Konsultasi</span>
                    </a>
                </div>

                {/* Mobile Actions */}
                <div className="flex md:hidden items-center gap-2">
                    <ThemeToggle />
                    <button
                        type="button"
                        className="p-1.5 rounded-[8px] text-ink-primary hover:bg-surface-hover transition"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-surface-card border-b border-line shadow-[var(--shadow-card)] p-6 flex flex-col space-y-4">
                    {NAVIGATION.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-ink-secondary font-medium hover:text-ubuntu-orange transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href={COMPANY_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center justify-center gap-2 bg-ubuntu-orange hover:bg-ubuntu-orangeHover active:bg-ubuntu-orangeActive text-white px-5 py-3 rounded-[8px] text-center font-medium transition shadow-[0_6px_16px_-4px_rgba(233,84,32,0.45)]"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <WhatsAppIcon size={16} />
                        <span>Konsultasi</span>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
