import React from 'react';
import { LEGAL_CONTENT } from '../../constants';
import { ShieldCheck } from 'lucide-react';

const Legal = () => {
    return (
        <section id="legal" className="py-[var(--section-pad)] bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-5 md:mb-6">
                    <div className="inline-flex items-center justify-center p-2.5 badge-cyan rounded-full mb-2.5">
                        <ShieldCheck size={20} />
                    </div>
                    <div className="font-mono text-xs uppercase tracking-wider text-ubuntu-orange mb-1.5">
                        Kredibilitas & Kepatuhan
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-ink-primary mb-2">
                        {LEGAL_CONTENT.title}
                    </h2>
                    <p className="text-sm md:text-base text-ink-muted max-w-2xl mx-auto leading-relaxed">
                        {LEGAL_CONTENT.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                    {LEGAL_CONTENT.documents.map((doc, index) => (
                        <div key={index} className="group relative">
                            <div className="relative overflow-hidden rounded-[12px] border border-line hover:border-[var(--border-highlight)] bg-surface-card shadow-[var(--shadow-card)] transition duration-300">
                                <div className="aspect-[3/4] md:aspect-[4/3] w-full overflow-hidden bg-surface-elevated">
                                    <img
                                        src={doc.imageUrl}
                                        alt={doc.alt}
                                        className="w-full h-full object-contain group-hover:scale-105 transition duration-500 ease-in-out bg-white"
                                    />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1E1E1E]/95 via-[#1E1E1E]/75 to-transparent p-6 text-[#F7F7F7] translate-y-1 group-hover:translate-y-0 transition duration-300">
                                    <h3 className="font-bold text-lg">{doc.title}</h3>
                                    <p className="font-mono text-xs text-[#D4D4D4] mt-1">{doc.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Legal;
