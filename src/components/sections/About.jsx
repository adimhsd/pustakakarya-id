import React from 'react';
import { ABOUT_CONTENT } from '../../constants';
import clsx from 'clsx';

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

                <div className="rounded-[12px] border border-line bg-surface-card shadow-[var(--shadow-card)] p-6">
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-line">
                        <div>
                            <div className="font-mono text-xs uppercase tracking-wider text-ubuntu-orange">
                                Fokus & Pilar Ekosistem
                            </div>
                            <h3 className="font-bold text-base md:text-lg text-ink-primary">
                                Arsitektur Layanan Terintegrasi
                            </h3>
                        </div>
                        <span className="badge-cyan font-mono text-[11px] font-semibold px-2.5 py-1">
                            4 Unit Layanan
                        </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3.5">
                        {ABOUT_CONTENT.highlights.map((item, idx) => (
                            <div
                                key={item.title}
                                className={clsx(
                                    "rounded-[8px] p-4 border transition",
                                    idx === 0
                                        ? "bg-[image:var(--bg-quote)] border-[var(--border-highlight)]"
                                        : "bg-surface-elevated border-line"
                                )}
                            >
                                <div className="font-mono text-[11px] uppercase tracking-wider text-ubuntu-orange mb-1">
                                    {item.label}
                                </div>
                                <div className="font-bold text-sm text-ink-primary mb-1">
                                    {item.title}
                                </div>
                                <p className="text-xs text-ink-muted leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
