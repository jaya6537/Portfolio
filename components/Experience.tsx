import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import SectionWrapper from './SectionWrapper';

interface ExperienceContentProps {
    isVisible: boolean;
}

const ExperienceContent: React.FC<ExperienceContentProps> = ({ isVisible }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [contentKey, setContentKey] = useState(0);
    const activeExperience = EXPERIENCES[activeTab];

    const titleStyle = `transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} delay-100`;

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        setContentKey(prevKey => prevKey + 1); // Increment key to re-trigger animation
    };

    return (
        <div>
            <h2 className={`text-3xl font-bold text-text-primary font-poppins mb-12 flex items-center ${titleStyle}`}>
                <span className="text-accent font-mono text-2xl mr-4">03.</span> Where I’ve Worked
                <span className="flex-grow h-px bg-border-color ml-6"></span>
            </h2>

            <div className="flex flex-col md:flex-row">
                {/* Tabs */}
                <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible mb-6 md:mb-0 md:mr-8 border-b-2 md:border-b-0 md:border-l-2 border-border-color">
                    {EXPERIENCES.map((exp, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(index)}
                            className={`px-4 py-3 text-left whitespace-nowrap font-mono text-sm transition-all duration-300 ${
                                activeTab === index
                                    ? 'text-accent bg-component-background/50 border-b-2 md:border-b-0 md:border-l-2 border-accent'
                                    : 'text-text-secondary hover:bg-component-background/50 hover:text-accent'
                            }`}
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="fade-in" key={contentKey}>
                     <h3 className="text-xl font-bold text-text-primary">
                        {activeExperience.role} <span className="text-accent">@ {activeExperience.company}</span>
                    </h3>
                    <p className="text-text-secondary font-mono text-sm my-2">{activeExperience.duration}</p>
                    <ul className="mt-4 space-y-3 text-text-secondary">
                        {activeExperience.description.map((point, i) => (
                            <li key={i} className="flex items-start">
                                <span className="text-accent mr-4 mt-1">▹</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .fade-in {
                    animation: fadeIn 0.4s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

const Experience = SectionWrapper(ExperienceContent, "experience");
export default Experience;