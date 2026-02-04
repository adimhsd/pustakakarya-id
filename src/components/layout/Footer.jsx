import React from 'react';
import { COMPANY_INFO, FOOTER_CONTENT } from '../../constants';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="font-bold text-white text-lg mb-2">DIGITAL PUSTAKA KARYA</div>
                <p className="text-xs mb-4 max-w-md mx-auto">
                    {COMPANY_INFO.name} <br />
                    Email: {COMPANY_INFO.email}
                </p>
                <div className="text-xs border-t border-slate-800 pt-4">
                    {FOOTER_CONTENT.copyright}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
