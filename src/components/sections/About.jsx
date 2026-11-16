import React from 'react';
import { ABOUT_CONTENT } from '../../constants';

const About = () => {
    return (
        <section id="about" className="py-12 md:py-16 bg-surface-elevated/60 border-y border-line">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                    <span className="inline-block font-mono text-xs uppercase tracking-wider text-ubuntu-orange mb-3">
                        // Tentang Perusahaan
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-ink-primary mb-4 md:mb-6">
                        {ABOUT_CONTENT.title}
                    </h2>
                    <p className="text-sm md:text-base text-ink-secondary leading-relaxed mb-6">
                        {ABOUT_CONTENT.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="rounded-[12px] p-4 bg-surface-card border border-line shadow-[var(--shadow-card)]">
                            <div className="font-bold text-ubuntu-orange text-lg mb-1">Visi</div>
                            <p className="text-sm text-ink-muted leading-relaxed">
                                {ABOUT_CONTENT.vision}
                            </p>
                        </div>
                        <div className="rounded-[12px] p-4 bg-surface-card border border-line shadow-[var(--shadow-card)]">
                            <div className="font-bold text-semantic-aubergineText text-lg mb-1">Misi</div>
                            <p className="text-sm text-ink-muted leading-relaxed">
                                {ABOUT_CONTENT.mission}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-[12px] border border-line hover:border-[var(--border-highlight)] bg-surface-card shadow-[var(--shadow-card)] transition duration-300">
                    <div className="aspect-[16/10] w-full overflow-hidden bg-surface-elevated">
                        <img
                            src={ABOUT_CONTENT.imageUrl}
                            alt={ABOUT_CONTENT.imageAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-in-out"
                            loading="lazy"
                        />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1E1E1E]/95 via-[#1E1E1E]/75 to-transparent p-5 md:p-6 text-[#F7F7F7]">
                        <div className="font-mono text-[11px] uppercase tracking-wider text-ubuntu-orange mb-1">
                            Digital Pustaka Karya Workspace
                        </div>
                        <p className="font-semibold text-sm md:text-base">
                            {ABOUT_CONTENT.imageCaption}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
