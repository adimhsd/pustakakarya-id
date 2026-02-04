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
                isScrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="font-bold text-xl tracking-tight text-blue-700">
                    PUSTAKA<span className="text-slate-700">KARYA</span>
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

                <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                >
                    Konsultasi
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
