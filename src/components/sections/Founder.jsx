import React from 'react';
import { FOUNDER_CONTENT } from '../../constants';
import { Globe, MessageSquare, FileText, GraduationCap, Award, Github, ExternalLink } from 'lucide-react';

const Founder = () => {
    return (
        <section id="founder" className="py-12 md:py-20 bg-surface-elevated/60 border-y border-line">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 bg-surface-card border border-line rounded-[12px] shadow-[var(--shadow-card)] p-6 md:p-10 lg:p-12">
                    {/* Avatar + Status Pill matching adi-muhamad.my.id */}
                    <div className="flex flex-col items-center flex-shrink-0">
                        <div className="relative w-44 h-44 md:w-60 md:h-60">
                            <div
                                className="absolute -inset-1.5 rounded-[24px] opacity-75 blur-[8px]"
                                style={{
                                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-aubergine), var(--color-aubergine-dark))'
                                }}
                                aria-hidden="true"
                            />
                            <img
                                src={FOUNDER_CONTENT.imageUrl}
                                alt={FOUNDER_CONTENT.name}
                                className="relative z-10 w-full h-full object-cover rounded-[20px] border-2 border-white/20 bg-surface-base shadow-lg"
                            />
                            <div className="status-pill absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap font-semibold text-xs px-3.5 py-1.5 inline-flex items-center gap-2 shadow-lg">
                                <span className="w-2 h-2 rounded-full bg-semantic-emerald animate-pulse" />
                                <span>{FOUNDER_CONTENT.statusLabel}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left pt-2 lg:pt-0">
                        <div className="inline-block persona-tag px-3 py-1 text-xs font-semibold mb-3">
                            {FOUNDER_CONTENT.personaTag}
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-ink-primary mb-2">
                            {FOUNDER_CONTENT.name}
                        </h2>

                        <div className="space-y-1 mb-5">
                            <p className="text-sm md:text-base text-ubuntu-orange font-semibold">
                                {FOUNDER_CONTENT.role}
                            </p>
                            <p className="font-mono text-xs md:text-sm text-ink-muted">
                                {FOUNDER_CONTENT.academicRole}
                            </p>
                        </div>

                        <p className="text-sm md:text-base text-ink-secondary leading-relaxed mb-5">
                            {FOUNDER_CONTENT.bio}
                        </p>

                        <blockquote className="bg-[image:var(--bg-quote)] border-l-4 border-ubuntu-aubergine p-4 rounded-r-[12px] text-sm text-ink-secondary leading-relaxed italic mb-6 text-left">
                            "{FOUNDER_CONTENT.quote}"
                        </blockquote>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-6">
                            {FOUNDER_CONTENT.tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="font-mono text-xs bg-surface-tag border border-line text-ink-secondary px-3 py-1.5 rounded-[8px] flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-ubuntu-orange rounded-full" />
                                    <span>{tag}</span>
                                </div>
                            ))}
                        </div>

                        {/* Links to adi-muhamad.my.id & profiles */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            <a
                                href={FOUNDER_CONTENT.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium"
                            >
                                <Globe size={16} />
                                <span>Website & CV (adi-muhamad.my.id)</span>
                                <ExternalLink size={14} />
                            </a>
                            <a
                                href={FOUNDER_CONTENT.chatUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn inline-flex items-center gap-2 px-4 py-2.5 text-xs md:text-sm font-medium"
                            >
                                <MessageSquare size={15} className="text-ubuntu-orange" />
                                <span>Chat AI Saya</span>
                            </a>
                            <a
                                href={FOUNDER_CONTENT.blogUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn inline-flex items-center gap-2 px-4 py-2.5 text-xs md:text-sm font-medium"
                            >
                                <FileText size={15} className="text-ubuntu-orange" />
                                <span>Blog</span>
                            </a>
                            <a
                                href={FOUNDER_CONTENT.scholarUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn inline-flex items-center gap-2 px-4 py-2.5 text-xs md:text-sm font-medium"
                            >
                                <GraduationCap size={15} className="text-semantic-info" />
                                <span>Google Scholar</span>
                            </a>
                            <a
                                href={FOUNDER_CONTENT.sintaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn inline-flex items-center gap-2 px-4 py-2.5 text-xs md:text-sm font-medium"
                            >
                                <Award size={15} className="text-semantic-amber" />
                                <span>SINTA</span>
                            </a>
                            <a
                                href={FOUNDER_CONTENT.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn inline-flex items-center gap-2 px-4 py-2.5 text-xs md:text-sm font-medium"
                            >
                                <Github size={15} />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
