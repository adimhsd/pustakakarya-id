import React from 'react';
import { FOUNDER_CONTENT } from '../../constants';

const Founder = () => {
    return (
        <section className="py-10 md:py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white p-6 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                    <div className="w-40 h-40 md:w-64 md:h-64 flex-shrink-0">
                        <img
                            src={FOUNDER_CONTENT.imageUrl}
                            alt={FOUNDER_CONTENT.name}
                            className="w-full h-full object-cover rounded-2xl shadow-lg grayscale hover:grayscale-0 transition duration-500"
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                            The Founder
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{FOUNDER_CONTENT.name}</h2>
                        <p className="text-sm md:text-base text-blue-600 font-medium mb-6">{FOUNDER_CONTENT.role}</p>

                        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 italic">
                            "{FOUNDER_CONTENT.quote}"
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            {FOUNDER_CONTENT.tags.map((tag, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm text-slate-500">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    {tag}
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
