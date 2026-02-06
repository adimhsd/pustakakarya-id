import React from 'react';
import { COMPANY_INFO, FOOTER_CONTENT } from '../../constants';
import { Instagram, Facebook, Twitter, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="font-bold text-white text-lg mb-2">DIGITAL PUSTAKA KARYA</div>
                <p className="text-xs mb-4 max-w-md mx-auto">
                    {COMPANY_INFO.name} <br />
                    Email: {COMPANY_INFO.email}
                </p>

                <div className="flex items-center justify-center gap-6 mb-4">
                    <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-pink-500 transition">
                        <Instagram size={20} />
                    </a>
                    <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-blue-500 transition">
                        <Facebook size={20} />
                    </a>
                    <a href={COMPANY_INFO.socials.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-white hover:text-sky-400 transition">
                        <Twitter size={20} />
                    </a>
                    <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white hover:text-green-400 transition flex items-center gap-2">
                        <Phone size={20} />

                    </a>
                </div>

                <div className="text-xs border-t border-slate-800 pt-4">
                    {FOOTER_CONTENT.copyright}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
