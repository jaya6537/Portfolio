import React from 'react';

interface SplashScreenProps {
    isFinishing: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isFinishing }) => {
    return (
        <div 
            aria-hidden="true"
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ease-in-out ${isFinishing ? 'opacity-0' : 'opacity-100'}`}
        >
            <div className="logo-container">
                <span className="text-9xl font-bold text-accent font-poppins">JD</span>
            </div>
            
            <style>{`
                @keyframes popIn {
                    0% {
                        transform: scale(0.8);
                        opacity: 0;
                    }
                    60% {
                        transform: scale(1.1);
                        opacity: 1;
                    }
                    80% {
                        transform: scale(0.98);
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                .logo-container span {
                    display: inline-block;
                    animation: popIn 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                    text-shadow: 0 0 3px var(--color-accent);
                }
            `}</style>
        </div>
    );
};

export default SplashScreen;