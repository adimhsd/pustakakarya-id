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
        <section id="ecosystem" className="py-[var(--section-pad)] bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-5 md:mb-6">
                    <div className="font-mono text-xs uppercase tracking-wider text-ubuntu-orange mb-1.5">
                        // Layanan & Ekosistem Bisnis
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-ink-primary mb-2 text-balance">
                        System Builder & Automation sebagai Inti Ekosistem Digital
                    </h2>
                    <p className="text-sm md:text-base text-ink-muted max-w-2xl mx-auto">
                        Kami memprioritaskan pembangunan sistem cerdas dan otomatisasi proses kerja, ditunjang layanan penerbitan buku ber-ISBN, manajemen jurnal OJS, dan pelatihan teknologi.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {ECOSYSTEM_SERVICES.map((service) => {
                        const palette = PALETTE_MAP[service.color] || PALETTE_MAP.blue;
                        const Icon = service.icon;
                        const isPrimary = service.id === 'dev';

                        return (
                            <div
                                key={service.id}
                                className={clsx(
                                    "rounded-[12px] bg-surface-card hover:bg-surface-hover border shadow-[var(--shadow-card)] p-5 transition group flex flex-col h-full",
                                    isPrimary
                                        ? "border-ubuntu-orange/60 ring-1 ring-ubuntu-orange/20 hover:border-ubuntu-orange"
                                        : "border-line hover:border-[var(--border-highlight)]"
                                )}
                            >
                                <div className="flex items-center justify-between gap-2 mb-3.5">
                                    <div
                                        className={clsx(
                                            "w-11 h-11 rounded-[8px] flex items-center justify-center transition duration-300",
                                            palette.badge
                                        )}
                                    >
                                        <Icon size={22} />
                                    </div>
                                    {service.badge && (
                                        <span
                                            className={clsx(
                                                "font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1",
                                                palette.badge
                                            )}
                                        >
                                            {service.badge}
                                        </span>
                                    )}
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
