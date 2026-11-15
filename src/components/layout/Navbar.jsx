import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION, COMPANY_INFO } from '../../constants';
import ThemeToggle from '../ui/ThemeToggle';
import clsx from 'clsx';

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
                    ? "bg-[var(--bg-navbar)] backdrop-blur-[16px] border-b border-line py-3 md:py-4"
                    : "bg-transparent py-4 md:py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="font-bold text-xl md:text-2xl tracking-tight text-ubuntu-orange">
                    DIGITAL <span className="text-ink-primary">PUSTAKA KARYA</span>
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
                        className="btn-primary bg-ubuntu-orange hover:bg-ubuntu-orangeHover active:bg-ubuntu-orangeActive text-white px-5 py-2.5 rounded-[8px] text-sm font-medium transition shadow-[0_6px_16px_-4px_rgba(233,84,32,0.45)]"
                    >
                        Konsultasi
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
                        className="btn-primary bg-ubuntu-orange hover:bg-ubuntu-orangeHover active:bg-ubuntu-orangeActive text-white px-5 py-3 rounded-[8px] text-center font-medium transition shadow-[0_6px_16px_-4px_rgba(233,84,32,0.45)]"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Konsultasi
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
