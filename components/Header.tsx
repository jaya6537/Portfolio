import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

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
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
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
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
                <nav className="container mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
                    <a href="#hero" aria-label="Back to top" className="text-2xl font-bold text-accent font-poppins transition-transform duration-300 hover:scale-105">JD</a>

                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link, index) => (
                            <a key={link.name} href={link.href} className="text-md text-text-primary hover:text-accent transition-colors duration-300">
                               <span className="text-accent">0{index + 1}.</span> {link.name}
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
                {/* Mobile Menu */}
                <div 
                    id="mobile-menu" 
                    ref={menuRef}
                    className={`fixed top-0 right-0 h-full w-3/4 bg-component-background shadow-2xl transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center z-50`}
                >
                     {navLinks.map((link, index) => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl text-text-primary hover:text-accent my-4 transition-colors duration-300">
                           <span className="text-accent">0{index + 1}.</span> {link.name}
                        </a>
                    ))}
                </div>
            </header>
        </>
    );
};

export default Header;