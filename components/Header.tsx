import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements"},
    { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [headerStyle, setHeaderStyle] = useState({});
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sections = navLinks
            .map(link => document.getElementById(link.href.substring(1)))
            .filter((el): el is HTMLElement => el !== null);

        const handleScroll = () => {
            const scrollY = window.scrollY;
            
            // Section highlighting logic
            let currentSectionId = '';
            const scrollPosition = scrollY + 100;

            for (const section of sections) {
                if (section.offsetTop <= scrollPosition) {
                    currentSectionId = section.id;
                } else {
                    break;
                }
            }
            
            if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 20) {
                 const lastSection = sections[sections.length - 1];
                 if (lastSection) {
                    currentSectionId = lastSection.id;
                 }
            }

            setActiveSection(currentSectionId);
            
            // Header background and shadow transition logic
            const transitionEnd = 100; // The scroll distance (px) over which the transition occurs
            const progress = Math.min(scrollY / transitionEnd, 1);

            const lightBg = `rgba(240, 248, 255, ${progress * 0.85})`;
            const darkBg = `rgba(10, 25, 47, ${progress * 0.85})`;

            const lightShadow = `0 4px 6px -1px rgba(51, 65, 85, ${progress * 0.1}), 0 2px 4px -2px rgba(51, 65, 85, ${progress * 0.08})`;
            const darkShadow = `0 4px 6px -1px rgba(2, 12, 27, ${progress * 0.5}), 0 2px 4px -2px rgba(2, 12, 27, ${progress * 0.4})`;

            setHeaderStyle({
                backgroundColor: theme === 'dark' ? darkBg : lightBg,
                boxShadow: progress > 0.1 ? (theme === 'dark' ? darkShadow : lightShadow) : 'none',
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Call on mount to set initial styles

        return () => window.removeEventListener('scroll', handleScroll);
    }, [theme]);

    useEffect(() => {
        const mainContent = document.getElementById('main-content');
        
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
                return;
            }

            if (e.key === 'Tab' && menuRef.current) {
                const focusableElements = Array.from(
                    menuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
                );
                if (focusableElements.length === 0) return;

                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey) { 
                    if (document.activeElement === firstElement) {
                        (lastElement as HTMLElement).focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        (firstElement as HTMLElement).focus();
                        e.preventDefault();
                    }
                }
            }
        };

        if (isOpen) {
            if (mainContent) mainContent.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleKeydown);
            
            setTimeout(() => {
                menuRef.current?.querySelector<HTMLElement>('a[href]')?.focus();
            }, 100);

            return () => {
                document.removeEventListener('keydown', handleKeydown);
                if (mainContent) mainContent.removeAttribute('aria-hidden');
                document.body.style.overflow = 'auto';
                menuButtonRef.current?.focus();
            };
        }
    }, [isOpen]);

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-background/50 backdrop-blur-sm md:hidden z-40" onClick={() => setIsOpen(false)}></div>}
            <header 
                className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-300"
                style={headerStyle}
            >
                <nav className="container mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
                    <a href="#hero" aria-label="Back to top" className="text-2xl font-bold text-accent font-poppins transition-transform duration-300 hover:scale-105">JD</a>

                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className={`text-md transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'text-accent' : 'text-text-primary hover:text-accent'}`}
                            >
                               {link.name}
                            </a>
                        ))}
                        <ThemeToggle />
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button 
                            ref={menuButtonRef}
                            onClick={() => setIsOpen(!isOpen)} 
                            className="text-accent focus:outline-none z-50"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            <div 
                id="mobile-menu" 
                ref={menuRef}
                className={`fixed top-0 right-0 h-full w-3/4 bg-component-background shadow-2xl transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center z-50`}
            >
                 {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        onClick={() => setIsOpen(false)} 
                        className={`text-xl my-4 transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'text-accent' : 'text-text-primary hover:text-accent'}`}
                    >
                       {link.name}
                    </a>
                ))}
            </div>
        </>
    );
};

export default Header;