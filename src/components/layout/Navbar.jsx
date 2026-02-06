import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Twitter, Phone } from 'lucide-react';
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
                isScrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3 md:py-4" : "bg-transparent py-4 md:py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="font-bold text-xl md:text-2xl tracking-tight text-blue-700">
                    DIGITAL <span className="text-slate-700">PUSTAKA KARYA</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 font-medium text-sm text-slate-600">
                    {NAVIGATION.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="hover:text-blue-600 transition"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <div className="hidden md:flex items-center gap-3 text-slate-600">
                        <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-600 transition">
                            <Instagram size={18} />
                        </a>
                        <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition">
                            <Facebook size={18} />
                        </a>
                        <a href={COMPANY_INFO.socials.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-slate-800 transition">
                            <Twitter size={18} />
                        </a>
                        <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-600 transition">
                            <Phone size={18} />
                        </a>
                    </div>

                    <a
                        href={COMPANY_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                    >
                        Konsultasi
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg p-6 flex flex-col space-y-4">
                    {NAVIGATION.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-slate-600 font-medium hover:text-blue-600 transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href={COMPANY_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-5 py-3 rounded-xl text-center font-semibold hover:bg-blue-700 transition"
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
