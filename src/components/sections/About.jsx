import React from 'react';
import { ABOUT_CONTENT } from '../../constants';
// Optional: import an image if we have one or use placeholder div

const About = () => {
    return (
        <section id="about" className="py-10 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{ABOUT_CONTENT.title}</h2>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                        {ABOUT_CONTENT.description}
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <div className="font-bold text-blue-700 text-xl">Visi</div>
                            <p className="text-sm text-slate-600 mt-1 text-balance">
                                {ABOUT_CONTENT.vision}
                            </p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg">
                            <div className="font-bold text-slate-800 text-xl">Misi</div>
                            <p className="text-sm text-slate-600 mt-1 text-balance">
                                {ABOUT_CONTENT.mission}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-video bg-blue-100 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center text-blue-300 font-bold italic">
                        {/* Use an actual image or the placeholder style from prototype */}
                        <span className="text-center p-4">Digital Workspace Illustration</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
