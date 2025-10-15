import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import { PERSONAL_INFO } from './constants';
import GitHubIcon from './components/icons/GitHubIcon';
import LinkedInIcon from './components/icons/LinkedInIcon';
import MailIcon from './components/icons/MailIcon';
import SplashScreen from './components/SplashScreen';
import { useTheme } from './contexts/ThemeContext';

const popSfxBase64 = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAJABkAAoA8AIAAAAAEACABkYXRhAgAAABwAAAAA/v8r/v8e/f8a/v8e/f8l/v80//9B//9f//+J//+z//+z/+KF//92//9e//9T//9L//9F//9A//8+/v82/v8y/v8x/v8y';

const App: React.FC = () => {
    const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);
    
    // Effect to play a sound on the user's first interaction.
    useEffect(() => {
        const audio = new Audio(popSfxBase64);
        audio.volume = 0.2;

        const playSoundOnFirstInteraction = () => {
            audio.play().catch(() => {}); // Play and catch any errors silently
            // Remove listeners so it only plays once
            document.removeEventListener('click', playSoundOnFirstInteraction);
            document.removeEventListener('keydown', playSoundOnFirstInteraction);
        };

        document.addEventListener('click', playSoundOnFirstInteraction);
        document.addEventListener('keydown', playSoundOnFirstInteraction);

        return () => {
            document.removeEventListener('click', playSoundOnFirstInteraction);
            document.removeEventListener('keydown', playSoundOnFirstInteraction);
        };
    }, []); // Run only once on initial app load


    useEffect(() => {
        const fadeOutTimer = setTimeout(() => {
            setIsAnimatingOut(true);
        }, 2000);

        const removeTimer = setTimeout(() => {
            setIsSplashScreenVisible(false);
        }, 2500);

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    useEffect(() => {
        if (isSplashScreenVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isSplashScreenVisible]);


    return (
        <>
            {isSplashScreenVisible && <SplashScreen isFinishing={isAnimatingOut} />}
            
            <div className={`bg-background min-h-screen transition-opacity duration-500 ${isSplashScreenVisible ? 'opacity-0' : 'opacity-100'}`}>
                <Header />

                {/* Left Fixed Social Bar */}
                <div className="hidden lg:flex fixed bottom-0 left-12 w-10 flex-col items-center space-y-6 z-10">
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-text-tertiary hover:text-accent transition-all duration-300 transform hover:-translate-y-1">
                        <GitHubIcon className="w-6 h-6" />
                    </a>
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-text-tertiary hover:text-accent transition-all duration-300 transform hover:-translate-y-1">
                        <LinkedInIcon className="w-6 h-6" />
                    </a>
                    <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Send an email" className="text-text-tertiary hover:text-accent transition-all duration-300 transform hover:-translate-y-1">
                        <MailIcon className="w-6 h-6" />
                    </a>
                    <div className="h-24 w-px bg-text-tertiary"></div>
                </div>

                {/* Right Fixed Email Bar */}
                <div className="hidden lg:flex fixed bottom-0 right-12 w-10 flex-col items-center space-y-24 z-10">
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="writing-mode-vertical-rl text-sm font-mono tracking-widest text-text-tertiary hover:text-accent transition-colors duration-300">
                        {PERSONAL_INFO.email}
                    </a>
                    <div className="h-24 w-px bg-text-tertiary"></div>
                </div>

                <div id="main-content" className="flex flex-col min-h-screen">
                    <main className="container mx-auto max-w-screen-lg px-6 md:px-12 lg:px-24 flex-grow">
                        <Hero />
                        <About />
                        <Skills />
                        <Experience />
                        <Projects />
                        <Education />
                        <Achievements />
                    </main>
                    <Footer />
                </div>

                <style>{`
                    .writing-mode-vertical-rl {
                        writing-mode: vertical-rl;
                    }
                `}</style>
            </div>
        </>
    );
};

export default App;