import React from 'react';
import { EDUCATIONS } from '../constants';
import SectionWrapper from './SectionWrapper';

interface EducationContentProps {
    isVisible: boolean;
}

const EducationContent: React.FC<EducationContentProps> = ({ isVisible }) => {
    const titleStyle = `transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} delay-100`;
    const itemBaseStyle = "transition-all duration-500 ease-in-out";
    const itemVisibleStyle = "opacity-100 translate-y-0";
    const itemHiddenStyle = "opacity-0 translate-y-5";

    return (
        <div>
            <h2 className={`text-3xl font-bold text-text-primary font-poppins mb-12 flex items-center ${titleStyle}`}>
                <span className="text-accent font-mono text-2xl mr-4">05.</span> Education
                <span className="flex-grow h-px bg-border-color ml-6"></span>
            </h2>

            <div className="space-y-8">
                {EDUCATIONS.map((edu, index) => (
                    <div 
                        key={index} 
                        className={`bg-component-background p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-[var(--color-shadow-accent)] ${itemBaseStyle} ${isVisible ? itemVisibleStyle : itemHiddenStyle}`} 
                        style={{ transitionDelay: `${100 * (index + 2)}ms` }}
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-text-primary">{edu.institution}</h3>
                                <p className="text-text-tertiary mt-1">{edu.degree}</p>
                                {edu.details && <p className="text-text-secondary text-sm mt-1">{edu.details}</p>}
                            </div>
                            <p className="text-text-secondary font-mono text-sm flex-shrink-0 ml-4">{edu.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Education = SectionWrapper(EducationContent, "education");
export default Education;