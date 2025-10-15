import React, { useEffect } from 'react';

interface SplashScreenProps {
    isFinishing: boolean;
}

// A short, subtle pop sound effect encoded in Base64 to avoid an extra file request.
const popSfxBase64 = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAJABkAAoA8AIAAAAAEACABkYXRhAgAAABwAAAAA/v8r/v8e/f8a/v8e/f8l/v80//9B//9f//+J//+z//+z/+KF//92//9e//9T//9L//9F//9A//8+/v82/v8y/v8x/v8y';


const SplashScreen: React.FC<SplashScreenProps> = ({ isFinishing }) => {

    useEffect(() => {
        // Create an audio object for the sound effect.
        const audio = new Audio(popSfxBase64);
        audio.volume = 0.2; // Keep the volume low to be subtle.

        // Play the sound effect. We'll wrap this in a .catch()
        // to handle browser autoplay restrictions gracefully without console errors.
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // Autoplay was prevented. This is a non-critical enhancement,
                // so we can fail silently without disrupting the user experience.
                console.log("Splash screen sound autoplay was prevented by the browser.");
            });
        }
    }, []); // Empty dependency array ensures this runs only once when the component mounts.


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