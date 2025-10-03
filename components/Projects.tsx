import React from 'react';
import { PROJECTS, PERSONAL_INFO } from '../constants';
import SectionWrapper from './SectionWrapper';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import FolderIcon from './icons/FolderIcon';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
    const githubUrl = project.githubLink || PERSONAL_INFO.github;
    const hasSpecificGithub = !!project.githubLink;

    return (
        <div className="bg-component-background h-full rounded-lg shadow-lg p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
            <header className="flex justify-between items-center mb-6">
                <FolderIcon className="w-10 h-10 text-accent" />
                <div className="flex items-center space-x-4">
                    <a 
                        href={githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={hasSpecificGithub ? `View source code for ${project.title} on GitHub` : "View my GitHub profile"}
                        className="text-text-tertiary hover:text-accent transition-colors duration-300"
                    >
                        <GitHubIcon className="w-6 h-6" />
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`} className="text-text-tertiary hover:text-accent transition-colors duration-300">
                        <ExternalLinkIcon className="w-6 h-6" />
                    </a>
                </div>
            </header>
            <div className="flex-grow">
                <h3 className="text-2xl font-bold text-text-primary hover:text-accent transition-colors duration-300 mb-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                </h3>
                <p className="text-text-secondary text-lg mb-4">{project.description}</p>
            </div>
            <footer className="mt-auto pt-4">
                <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-text-tertiary">
                    {project.technologies.map(tech => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
            </footer>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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