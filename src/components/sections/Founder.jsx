import React from 'react';
import { FOUNDER_CONTENT } from '../../constants';

const Founder = () => {
    return (
        <section className="py-12 md:py-20 bg-surface-elevated/60 border-y border-line">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-surface-card border border-line rounded-[12px] shadow-[var(--shadow-card)] p-6 md:p-12">
                    <div className="w-40 h-40 md:w-60 md:h-60 flex-shrink-0">
                        <img
                            src={FOUNDER_CONTENT.imageUrl}
                            alt={FOUNDER_CONTENT.name}
                            className="w-full h-full object-cover rounded-[12px] border-2 border-ubuntu-aubergine/40 shadow-lg grayscale hover:grayscale-0 transition duration-500"
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-block persona-tag px-3 py-1 text-xs font-bold mb-4 uppercase tracking-wider">
                            The Founder
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-ink-primary mb-2">
                            {FOUNDER_CONTENT.name}
                        </h2>
                        <p className="text-sm md:text-base text-ubuntu-orange font-medium mb-6">
                            {FOUNDER_CONTENT.role}
                        </p>

                        <blockquote className="bg-[image:var(--bg-quote)] border-l-4 border-ubuntu-aubergine p-4 rounded-r-[12px] text-sm md:text-base text-ink-secondary leading-relaxed italic mb-6 text-left">
                            "{FOUNDER_CONTENT.quote}"
                        </blockquote>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {FOUNDER_CONTENT.tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="font-mono text-xs bg-surface-tag border border-line text-ink-secondary px-3 py-1.5 rounded-[8px] flex items-center gap-2"
                                >
                                    <span className="w-2 h-2 bg-ubuntu-orange rounded-full"></span>
                                    <span>{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
