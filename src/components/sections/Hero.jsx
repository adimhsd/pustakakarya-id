import React from 'react';
import { HERO_CONTENT, COMPANY_INFO } from '../../constants';

const Hero = () => {
    return (
        <section className="pt-24 pb-7 md:pt-28 md:pb-10 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 persona-tag px-3.5 py-1 text-xs mb-3">
                    <span className="w-2 h-2 rounded-full bg-ubuntu-orange"></span>
                    <span>{COMPANY_INFO.name}</span>
                </div>

                <div className="font-mono text-xs text-ink-muted mb-3">
                    {HERO_CONTENT.badge}
                </div>

                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3 md:mb-4 text-ink-primary animate-fade-in-up">
                    {HERO_CONTENT.headlinePrefix} <br className="hidden md:block" />
                    <span className="text-ubuntu-orange">{HERO_CONTENT.headlineHighlight}</span>
                </h1>

                <p className="text-sm md:text-base text-ink-secondary max-w-3xl mx-auto mb-6 md:mb-7 leading-relaxed">
                    {HERO_CONTENT.subheadline}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <a
                        href={HERO_CONTENT.ctaPrimary.href}
                        className="btn-primary bg-ubuntu-orange hover:bg-ubuntu-orangeHover active:bg-ubuntu-orangeActive text-white px-6 py-2.5 rounded-[8px] font-medium transition active:scale-95"
                    >
                        {HERO_CONTENT.ctaPrimary.label}
                    </a>
                    <a
                        href={HERO_CONTENT.ctaSecondary.href}
                        className="btn bg-surface-card hover:bg-surface-hover border border-line hover:border-[var(--border-highlight)] text-ink-primary px-6 py-2.5 rounded-[8px] font-medium transition active:scale-95"
                    >
                        {HERO_CONTENT.ctaSecondary.label}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
