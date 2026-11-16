import React from 'react';
import { COMPANY_INFO, FOOTER_CONTENT } from '../../constants';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-surface-elevated text-ink-muted border-t border-line py-7">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="font-bold text-ink-primary text-lg mb-1.5">
                    <span className="text-ubuntu-orange">DIGITAL</span> PUSTAKA KARYA
                </div>
                <p className="text-xs text-ink-secondary mb-4 max-w-md mx-auto leading-relaxed">
                    {COMPANY_INFO.name} <br />
                    <span className="font-mono text-ink-muted">Email: {COMPANY_INFO.email}</span>
                </p>

                <div className="flex items-center justify-center gap-3.5 mb-4">
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
                        aria-label="X / GitHub"
                        className="w-10 h-10 rounded-[8px] bg-surface-card border border-line hover:border-[var(--border-highlight)] text-ink-secondary hover:text-ubuntu-orange flex items-center justify-center transition shadow-[var(--shadow-card)]"
                    >
                        <Twitter size={18} />
                    </a>
                    <a
                        href={COMPANY_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="w-10 h-10 rounded-[8px] bg-surface-card border border-line hover:border-[var(--border-highlight)] text-ink-secondary hover:text-semantic-emerald flex items-center justify-center transition shadow-[var(--shadow-card)]"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .15 5.34.15 11.91c0 2.1.55 4.15 1.59 5.96L0 24l6.31-1.65a11.86 11.86 0 0 0 5.75 1.47h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.46-8.43Zm-8.46 18.32h-.01a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.87 9.87 0 0 1-1.52-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.88-9.89 9.88Zm5.43-7.41c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                        </svg>
                    </a>
                </div>

                <div className="font-mono text-xs text-ink-muted border-t border-line pt-4">
                    {FOOTER_CONTENT.copyright}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
