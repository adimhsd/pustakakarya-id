import React from 'react';
import { ECOSYSTEM_SERVICES } from '../../constants';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';

const PALETTE_MAP = {
    blue: {
        badge: 'badge-cyan',
        link: 'text-ubuntu-orange',
        dot: 'bg-ubuntu-orange',
    },
    purple: {
        badge: 'badge-indigo',
        link: 'text-semantic-aubergineText',
        dot: 'bg-ubuntu-aubergine',
    },
    green: {
        badge: 'badge-emerald',
        link: 'text-semantic-emerald',
        dot: 'bg-semantic-emerald',
    },
    orange: {
        badge: 'badge-amber',
        link: 'text-semantic-amber',
        dot: 'bg-semantic-amber',
    },
};

const Ecosystem = () => {
    return (
        <section id="ecosystem" className="py-12 md:py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10 md:mb-16">
                    <div className="font-mono text-xs uppercase tracking-wider text-ubuntu-orange mb-2">
                        Ekosistem Layanan
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-ink-primary mb-4 text-balance">
                        Satu Pintu untuk Transformasi Digital Anda
                    </h2>
                    <p className="text-sm md:text-base text-ink-muted max-w-2xl mx-auto">
                        Kami menjembatani gap antara teori akademis dan implementasi industri melalui unit bisnis yang terintegrasi.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ECOSYSTEM_SERVICES.map((service) => {
                        const palette = PALETTE_MAP[service.color] || PALETTE_MAP.blue;
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.id}
                                className="rounded-[12px] bg-surface-card hover:bg-surface-hover border border-line hover:border-[var(--border-highlight)] shadow-[var(--shadow-card)] p-6 md:p-8 transition group flex flex-col h-full"
                            >
                                <div
                                    className={clsx(
                                        "w-12 h-12 rounded-[8px] flex items-center justify-center mb-6 transition duration-300",
                                        palette.badge
                                    )}
                                >
                                    <Icon size={24} />
                                </div>

                                <h3 className="font-bold text-lg text-ink-primary mb-2 text-balance">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-ink-muted mb-5 leading-relaxed">
                                    {service.description}
                                </p>

                                {service.details && service.details.length > 0 && (
                                    <ul className="space-y-2 mb-6 flex-grow">
                                        {service.details.map((detail, idx) => (
                                            <li
                                                key={idx}
                                                className="text-xs text-ink-secondary flex items-start gap-2"
                                            >
                                                <span
                                                    className={clsx(
                                                        "w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0",
                                                        palette.dot
                                                    )}
                                                />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <a
                                    href={service.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={clsx(
                                        "text-sm font-semibold flex items-center gap-1.5 hover:underline mt-auto",
                                        palette.link
                                    )}
                                >
                                    <span>{service.cta}</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
