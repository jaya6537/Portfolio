import React from 'react';
import { PERSONAL_INFO } from '../constants';
import SectionWrapper from './SectionWrapper';

interface AboutContentProps {
    isVisible: boolean;
}

const AboutContent: React.FC<AboutContentProps> = ({ isVisible }) => {
    const baseStyle = "transition-all duration-700 ease-in-out";
    const visibleStyle = "opacity-100 translate-y-0";
    const hiddenStyle = "opacity-0 translate-y-5";

    const getStyleWithDelay = (delay: string) => `${baseStyle} ${isVisible ? visibleStyle : hiddenStyle} ${delay}`;

    return (
        <div>
            <h2 className={`text-3xl font-bold text-text-primary font-poppins mb-8 flex items-center ${getStyleWithDelay('delay-100')}`}>
                <span className="text-accent font-mono text-2xl mr-4">01.</span> About Me
                <span className="flex-grow h-px bg-border-color ml-6"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                <div className={`md:col-span-3 text-text-secondary text-lg space-y-4 ${getStyleWithDelay('delay-200')}`}>
                    <p>{PERSONAL_INFO.about}</p>
                </div>
                <div className={`md:col-span-2 flex items-center justify-center ${getStyleWithDelay('delay-300')}`}>
                    <div className="w-64 h-64 md:w-80 md:h-80 relative">
                        <div className={`absolute inset-0 bg-accent rounded-lg transform transition-transform duration-[2000ms] ease-in-out ${isVisible ? 'translate-x-2 translate-y-2' : 'translate-x-0 translate-y-0'}`}></div>
                        <div className="absolute inset-0 rounded-lg overflow-hidden">
                             <img 
                                src={PERSONAL_INFO.profileImage}
                                alt={PERSONAL_INFO.name} 
                                className={`w-full h-full object-cover filter transition-all duration-[2000ms] ease-in-out ${isVisible ? 'grayscale-0' : 'grayscale'}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const About = SectionWrapper(AboutContent, "about");
export default About;