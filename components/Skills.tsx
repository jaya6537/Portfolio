import React from 'react';
import { SKILLS } from '../constants';
import SectionWrapper from './SectionWrapper';

interface SkillsContentProps {
    isVisible: boolean;
}

const SkillsContent: React.FC<SkillsContentProps> = ({ isVisible }) => {
    const titleStyle = `transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} delay-100`;
    const cardBaseStyle = "transition-all duration-500 ease-in-out";
    const cardVisibleStyle = "opacity-100 translate-y-0";
    const cardHiddenStyle = "opacity-0 translate-y-8";

    return (
        <div>
            <h2 className={`text-3xl font-bold text-text-primary font-poppins mb-12 flex items-center ${titleStyle}`}>
                <span className="text-accent font-mono text-2xl mr-4">02.</span> My Skills
                <span className="flex-grow h-px bg-border-color ml-6"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(SKILLS).map(([category, skills], index) => (
                    <div 
                        key={category} 
                        className={`bg-component-background p-6 rounded-lg shadow-lg ${cardBaseStyle} ${isVisible ? cardVisibleStyle : cardHiddenStyle}`}
                        style={{ transitionDelay: `${100 * (index + 2)}ms` }}
                    >
                        <h3 className="text-lg font-bold text-accent mb-4">{category}</h3>
                        <ul className="space-y-2 text-text-secondary">
                            {skills.map(skill => (
                                <li key={skill.name} className="flex items-center">
                                    <span className="text-accent mr-2">▹</span>
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills = SectionWrapper(SkillsContent, "skills");
export default Skills;