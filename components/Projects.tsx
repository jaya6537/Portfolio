import React from 'react';
import { PROJECTS } from '../constants';
import SectionWrapper from './SectionWrapper';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
    return (
        <div className="bg-component-background h-full rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2">
            <div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl text-accent" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                    </span>
                    <div className="flex items-center space-x-4">
                        <a href="https://github.com/jaya6537" target="_blank" rel="noopener noreferrer" aria-label="View my GitHub profile" className="text-text-tertiary hover:text-accent transition-colors duration-300">
                            <GitHubIcon className="w-6 h-6" />
                        </a>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`} className="text-text-tertiary hover:text-accent transition-colors duration-300">
                            <ExternalLinkIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-text-primary hover:text-accent transition-colors duration-300 mb-2">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                </h3>
                <p className="text-text-secondary text-md mb-4">{project.description}</p>
            </div>
            <ul className="flex flex-wrap gap-2 font-mono text-sm text-text-secondary">
                {project.technologies.map(tech => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
        </div>
    );
};

interface ProjectsContentProps {
    isVisible: boolean;
}

const ProjectsContent: React.FC<ProjectsContentProps> = ({ isVisible }) => {
    const titleStyle = `transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} delay-100`;
    const cardBaseStyle = "transition-all duration-500 ease-in-out";
    const cardVisibleStyle = "opacity-100 translate-y-0";
    const cardHiddenStyle = "opacity-0 translate-y-8";

    return (
        <div>
            <h2 className={`text-3xl font-bold text-text-primary font-poppins mb-8 flex items-center ${titleStyle}`}>
                <span className="text-accent font-mono text-2xl mr-4">04.</span> Some Things I’ve Built
                <span className="flex-grow h-px bg-border-color ml-6"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, index) => (
                     <div key={index} className={`${cardBaseStyle} ${isVisible ? cardVisibleStyle : cardHiddenStyle}`} style={{ transitionDelay: `${100 * (index + 2)}ms` }}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const Projects = SectionWrapper(ProjectsContent, "projects");
export default Projects;