import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-text-tertiary hover:text-accent hover:bg-component-background/50 transition-all duration-300"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
            {theme === 'dark' ? (
                <SunIcon className="w-5 h-5 transform transition-transform duration-500 rotate-0 hover:rotate-90" />
            ) : (
                <MoonIcon className="w-5 h-5 transform transition-transform duration-500 rotate-0 hover:-rotate-45" />
            )}
        </button>
    );
};

export default ThemeToggle;