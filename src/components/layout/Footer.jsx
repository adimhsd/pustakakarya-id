import React from 'react';
import { COMPANY_INFO, FOOTER_CONTENT } from '../../constants';
import { Instagram, Facebook, Twitter, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-surface-elevated text-ink-muted border-t border-line py-10">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="font-bold text-ink-primary text-lg mb-2">
                    <span className="text-ubuntu-orange">DIGITAL</span> PUSTAKA KARYA
                </div>
                <p className="text-xs text-ink-secondary mb-6 max-w-md mx-auto leading-relaxed">
                    {COMPANY_INFO.name} <br />
                    <span className="font-mono text-ink-muted">Email: {COMPANY_INFO.email}</span>
                </p>

                <div className="flex items-center justify-center gap-4 mb-6">
                    <a
                        href={COMPANY_INFO.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-10 h-10 rounded-[8px] bg-surface-card border border-line hover:border-[var(--border-highlight)] text-ink-secondary hover:text-ubuntu-orange flex items-center justify-center transition shadow-[var(--shadow-card)]"
                    >
                        <Instagram size={18} />
                    </a>
                    <a
                        href={COMPANY_INFO.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="w-10 h-10 rounded-[8px] bg-surface-card border border-line hover:border-[var(--border-highlight)] text-ink-secondary hover:text-ubuntu-orange flex items-center justify-center transition shadow-[var(--shadow-card)]"
                    >
                        <Facebook size={18} />
                    </a>
                    <a
                        href={COMPANY_INFO.socials.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (Twitter)"
                        className="w-10 h-10 rounded-[8px] bg-surface-card border border-line hover:border-[var(--border-highlight)] text-ink-secondary hover:text-ubuntu-orange flex items-center justify-center transition shadow-[var(--shadow-card)]"
                    >
                        <Twitter size={18} />
                    </a>
                    <a
                        href={COMPANY_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="w-10 h-10 rounded-[8px] bg-surface-card border border-line hover:border-[var(--border-highlight)] text-ink-secondary hover:text-ubuntu-orange flex items-center justify-center transition shadow-[var(--shadow-card)]"
                    >
                        <Phone size={18} />
                    </a>
                </div>

                <div className="font-mono text-xs text-ink-muted border-t border-line pt-6">
                    {FOOTER_CONTENT.copyright}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
