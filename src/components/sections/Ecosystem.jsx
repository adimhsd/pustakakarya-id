import React from 'react';
import { ECOSYSTEM_SERVICES } from '../../constants';
import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';

const Ecosystem = () => {
    return (
        <section id="ecosystem" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-balance">Satu Pintu untuk Transformasi Digital Anda</h2>
                    <p className="text-slate-600">
                        Kami menjembatani gap antara teori akademis dan implementasi industri melalui unit bisnis yang terintegrasi.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ECOSYSTEM_SERVICES.map((service) => {
                        // Map color names to Tailwind classes dynamically or use a lookup
                        const colorStyles = {
                            blue: "text-blue-600 bg-blue-100 group-hover:bg-blue-600",
                            purple: "text-purple-600 bg-purple-100 group-hover:bg-purple-600",
                            green: "text-green-600 bg-green-100 group-hover:bg-green-600",
                            orange: "text-orange-600 bg-orange-100 group-hover:bg-orange-600",
                        };
                        const linkColors = {
                            blue: "text-blue-600",
                            purple: "text-purple-600",
                            green: "text-green-600",
                            orange: "text-orange-600",
                        };

                        const iconStyle = colorStyles[service.color] || colorStyles.blue;
                        const linkColor = linkColors[service.color] || linkColors.blue;
                        const linkColorHover = `text-${service.color}-700`; // simple approximation

                        const Icon = service.icon;

                        return (
                            <div key={service.id} className="glass-card p-8 rounded-2xl hover:shadow-xl transition group flex flex-col h-full bg-white">
                                <div className={clsx(
                                    "w-12 h-12 rounded-lg flex items-center justify-center mb-6 font-bold group-hover:text-white transition duration-300",
                                    iconStyle
                                )}>
                                    <Icon size={24} />
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-balance">{service.title}</h3>
                                <p className="text-sm text-slate-500 mb-6 flex-grow">{service.description}</p>

                                {/* Optional: List key points if needed, but keeping it clean like prototype */}

                                <a
                                    href={service.link}
                                    className={clsx(
                                        "text-sm font-semibold flex items-center gap-1 hover:underline mt-auto",
                                        linkColor
                                    )}
                                >
                                    {service.cta} <ArrowRight size={14} />
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
