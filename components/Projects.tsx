import React, { useState } from 'react';
import { PROJECTS, PERSONAL_INFO } from '../constants';
import type { Project } from '../types';
import SectionWrapper from './SectionWrapper';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import FolderIcon from './icons/FolderIcon';
import ProjectModal from './ProjectModal';

const ProjectCard: React.FC<{ project: Project; onProjectSelect: (project: Project) => void; }> = ({ project, onProjectSelect }) => {
    const githubUrl = project.githubLink || PERSONAL_INFO.github;
    const hasSpecificGithub = !!project.githubLink;

    return (
        <div
            role="button"
            tabIndex={0}
            aria-label={`View details for ${project.title}`}
            onClick={() => onProjectSelect(project)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onProjectSelect(project);
                }
            }}
            className="bg-component-background h-full rounded-lg shadow-lg p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
            <header className="flex justify-between items-center mb-6">
                <FolderIcon className="w-10 h-10 text-accent" />
                <div className="flex items-center space-x-4">
                    <a 
                        href={githubUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={hasSpecificGithub ? `View source code for ${project.title} on GitHub` : "View my GitHub profile"}
                        className="text-text-tertiary hover:text-accent transition-colors duration-300 p-1"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <GitHubIcon className="w-6 h-6" />
                    </a>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                        className="text-text-tertiary hover:text-accent transition-colors duration-300 p-1"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalLinkIcon className="w-6 h-6" />
                    </a>
                </div>
            </header>
            <div className="flex-grow">
                <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300 mb-3">
                    {project.title}
                </h3>
                <p className="text-text-secondary text-lg mb-4">{project.description}</p>
            </div>
            <footer className="mt-auto pt-4">
                <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    {project.technologies.map(tech => (
                        <li key={tech}>
                           <span className="font-mono text-sm text-text-tertiary">{tech}</span>
                        </li>
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
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const titleStyle = `transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} delay-100`;
    const itemBaseStyle = "transition-all duration-500 ease-in-out";
    const itemVisibleStyle = "opacity-100 translate-y-0";
    const itemHiddenStyle = "opacity-0 translate-y-8";
    
    const handleProjectSelect = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div>
            <h2 className={`text-3xl font-bold text-text-primary font-poppins mb-12 flex items-center ${titleStyle}`}>
                <span className="text-accent font-mono text-2xl mr-4">04.</span> Some Things I’ve Built
                <span className="flex-grow h-px bg-border-color ml-6"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {PROJECTS.map((project, index) => (
                    <div 
                        key={project.title}
                        className={`${itemBaseStyle} ${isVisible ? itemVisibleStyle : itemHiddenStyle}`}
                        style={{ transitionDelay: `${100 * (index + 2)}ms` }}
                    >
                        <ProjectCard project={project} onProjectSelect={handleProjectSelect} />
                    </div>
                ))}
            </div>
            <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        </div>
    );
};

const Projects = SectionWrapper(ProjectsContent, "projects");
export default Projects;