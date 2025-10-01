import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import SectionWrapper from './SectionWrapper';

interface AchievementsContentProps {
    isVisible: boolean;
}

const AchievementsContent: React.FC<AchievementsContentProps> = ({ isVisible }) => {
    const titleStyle = `transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} delay-100`;
    const itemBaseStyle = "transition-all duration-500 ease-in-out";
    const itemVisibleStyle = "opacity-100 translate-y-0";
    const itemHiddenStyle = "opacity-0 translate-y-5";

    return (
        <div>
            <h2 className={`text-3xl font-bold text-text-primary font-poppins mb-8 flex items-center ${titleStyle}`}>
                <span className="text-accent font-mono text-2xl mr-4">06.</span> Achievements & Certifications
                 <span className="flex-grow h-px bg-border-color ml-6"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ACHIEVEMENTS.map((ach, index) => (
                    <div key={index} className={`bg-component-background p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 ${itemBaseStyle} ${isVisible ? itemVisibleStyle : itemHiddenStyle}`} style={{ transitionDelay: `${100 * (index + 2)}ms` }}>
                        <h3 className="text-lg font-bold text-accent mb-2">{ach.title}</h3>
                        <p className="text-text-secondary">{ach.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Achievements = SectionWrapper(AchievementsContent, "achievements");
export default Achievements;