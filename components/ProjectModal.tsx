import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Project } from '../types';
import { PERSONAL_INFO } from '../constants';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import CloseIcon from './icons/CloseIcon';

const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);

    const handleClose = useCallback(() => {
        setIsAnimatingOut(true);
        setTimeout(onClose, 300); // Match animation duration
    }, [onClose]);

    useEffect(() => {
        if (project) {
            setIsAnimatingOut(false);
            document.body.style.overflow = 'hidden';

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') handleClose();
            };
            window.addEventListener('keydown', handleKeyDown);

            // Focus trapping
            const modalElement = modalRef.current;
            if (!modalElement) return;

            const focusableElements = Array.from(
                modalElement.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
            );
            if (focusableElements.length === 0) return;
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            const handleTabKeyPress = (e: KeyboardEvent) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            (lastElement as HTMLElement).focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            (firstElement as HTMLElement).focus();
                            e.preventDefault();
                        }
                    }
                }
            };
            modalElement.addEventListener('keydown', handleTabKeyPress);
            (firstElement as HTMLElement).focus();

            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                modalElement.removeEventListener('keydown', handleTabKeyPress);
                document.body.style.overflow = 'auto';
            };
        }
    }, [project, handleClose]);

    if (!project) return null;

    const githubUrl = project.githubLink || PERSONAL_INFO.github;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isAnimatingOut ? 'opacity-0' : 'opacity-100'}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
        >
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={handleClose}></div>
            <div
                ref={modalRef}
                className={`bg-component-background rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col transition-transform duration-300 ${isAnimatingOut ? 'scale-95' : 'scale-100'}`}
            >
                <header className="p-4 sm:p-6 flex justify-between items-center border-b border-border-color flex-shrink-0">
                    <h2 id="project-modal-title" className="text-2xl font-bold text-text-primary font-poppins">{project.title}</h2>
                    <button onClick={handleClose} aria-label="Close project details" className="p-2 rounded-full hover:bg-component-background/50 text-text-tertiary hover:text-accent transition-colors">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </header>

                <div className="overflow-y-auto p-4 sm:p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <img src={project.image} alt={`${project.title} screenshot`} className="rounded-md w-full object-cover aspect-video mb-4 shadow-md" />
                             <div className="flex items-center space-x-4 mb-4">
                                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent hover:underline">
                                    <GitHubIcon className="w-5 h-5 mr-2" /> Source Code
                                </a>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent hover:underline">
                                    <ExternalLinkIcon className="w-5 h-5 mr-2" /> Live Demo
                                </a>
                            </div>
                            <h3 className="text-lg font-bold text-text-primary mb-2">Technologies Used</h3>
                            <ul className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-4">
                                {project.technologies.map(tech => (
                                    <li key={tech} className="text-accent font-mono text-sm">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                             <div>
                                <h3 className="text-lg font-bold text-text-primary mb-2">About this project</h3>
                                <p className="text-text-secondary">{project.detailedDescription}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-text-primary mb-2">Challenges</h3>
                                <ul className="space-y-2 text-text-secondary">
                                    {project.challenges.map((item, i) => <li key={i} className="flex items-start"><span className="text-accent mr-3 mt-1">▹</span>{item}</li>)}
                                </ul>
                            </div>
                             <div>
                                <h3 className="text-lg font-bold text-text-primary mb-2">Solutions</h3>
                                <ul className="space-y-2 text-text-secondary">
                                    {project.solutions.map((item, i) => <li key={i} className="flex items-start"><span className="text-accent mr-3 mt-1">▹</span>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;