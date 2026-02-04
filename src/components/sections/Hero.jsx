import React from 'react';
import { HERO_CONTENT } from '../../constants';

const Hero = () => {
    return (
        <section className="pt-24 pb-10 md:pt-32 md:pb-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4 md:mb-6 animate-fade-in-up">
                    {/* Split headline for styling if needed, or just render */}
                    Menjembatani Inovasi Akademik <br className="hidden md:block" />
                    <span className="text-blue-600">dengan Solusi Digital</span>
                </h1>
                <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto mb-8 md:mb-10">
                    {HERO_CONTENT.subheadline}
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <a
                        href={HERO_CONTENT.ctaPrimary.href}
                        className="bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition active:scale-95"
                    >
                        {HERO_CONTENT.ctaPrimary.label}
                    </a>
                    <a
                        href={HERO_CONTENT.ctaSecondary.href}
                        className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-medium hover:bg-slate-50 transition active:scale-95"
                    >
                        {HERO_CONTENT.ctaSecondary.label}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
