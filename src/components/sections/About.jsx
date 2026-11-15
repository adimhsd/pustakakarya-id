import React from 'react';
import { ABOUT_CONTENT } from '../../constants';

const About = () => {
    return (
        <section id="about" className="py-12 md:py-16 bg-surface-elevated/60 border-y border-line">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                    <span className="inline-block font-mono text-xs uppercase tracking-wider text-ubuntu-orange mb-3">
                        Tentang Kami
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
                <div className="relative">
                    <div className="aspect-video rounded-[12px] border border-line bg-[image:var(--bg-quote)] shadow-[var(--shadow-card)] overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                        <span className="persona-tag px-3 py-1 text-xs mb-3">
                            Ubuntu Yaru Ecosystem
                        </span>
                        <span className="text-lg md:text-xl font-bold text-ink-primary mb-1">
                            Digital Workspace Illustration
                        </span>
                        <span className="font-mono text-xs text-ink-muted">
                            Literasi &bull; Teknologi &bull; Kolaborasi
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
