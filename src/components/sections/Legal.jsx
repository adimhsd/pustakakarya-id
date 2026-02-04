import React from 'react';
import { LEGAL_CONTENT } from '../../constants';
import { ShieldCheck } from 'lucide-react';

const Legal = () => {
    return (
        <section id="legal" className="py-10 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10 md:mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-700 rounded-full mb-4">
                        <ShieldCheck size={24} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{LEGAL_CONTENT.title}</h2>
                    <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                        {LEGAL_CONTENT.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {LEGAL_CONTENT.documents.map((doc, index) => (
                        <div key={index} className="group relative">
                            <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-100 bg-slate-50">
                                <div className="aspect-[3/4] md:aspect-[4/3] w-full overflow-hidden">
                                    <img
                                        src={doc.imageUrl}
                                        alt={doc.alt}
                                        className="w-full h-full object-contain hover:scale-105 transition duration-500 ease-in-out bg-white"
                                    />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white translate-y-2 group-hover:translate-y-0 transition duration-300">
                                    <h3 className="font-bold text-lg">{doc.title}</h3>
                                    <p className="text-sm opacity-90">{doc.subtitle}</p>
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
