import React, { useState, useEffect } from 'react';

const getInitialTheme = () => {
    try {
        const saved = localStorage.getItem('adi_lp_theme');
        if (saved === 'light' || saved === 'dark') {
            return saved;
        }
    } catch {
        // Ignore storage errors and fall back to DOM attribute
    }
    const attr = document.documentElement.getAttribute('data-theme');
    return attr === 'light' ? 'light' : 'dark';
};

const ThemeToggle = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const resolved = theme === 'light' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', resolved);
        try {
            localStorage.setItem('adi_lp_theme', resolved);
        } catch {
            // Ignore storage errors
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const isLight = theme === 'light';

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full font-mono text-xs px-3.5 py-1.5 bg-surface-elevated hover:bg-surface-hover border border-line hover:border-[var(--border-highlight)] text-ink-primary shadow-[var(--shadow-card)] flex items-center gap-1.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
            aria-label="Ganti Tema Terang/Gelap"
        >
            <span aria-hidden="true">{isLight ? '🌙' : '☀️'}</span>
            <span>{isLight ? 'Dark' : 'Light'}</span>
        </button>
    );
};

export default ThemeToggle;
