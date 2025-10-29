import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import SectionWrapper from './SectionWrapper';
import ProjectModal from './ProjectModal';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface ProjectsContentProps {
    isVisible: boolean;
}

const ProjectsContent: React.FC<ProjectsContentProps> = ({ isVisible }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const numProjects = PROJECTS.length;

    const goNext = () => setActiveIndex((prev) => (prev + 1) % numProjects);
    const goPrev = () => setActiveIndex((prev) => (prev - 1 + numProjects) % numProjects);

    const resetAutoScroll = () => {
        if (autoScrollRef.current) clearInterval(autoScrollRef.current);
        // FIX: Auto-scroll should advance to the next project.
        autoScrollRef.current = setInterval(goNext, 5000);
    };
    
    useEffect(() => {
        if (isVisible) {
            resetAutoScroll();
        } else if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
        }
        return () => {
            if (autoScrollRef.current) clearInterval(autoScrollRef.current);
        };
    }, [isVisible, numProjects]);
    
    const handleNavClick = (navFunc: () => void) => {
        navFunc();
        resetAutoScroll();
    };
    
    const handleDotClick = (index: number) => {
        setActiveIndex(index);
        resetAutoScroll();
    }

    const handleCardClick = (index: number) => {
        if (index !== activeIndex) {
            setActiveIndex(index);
            resetAutoScroll();
        } else {
            setSelectedProject(PROJECTS[index]);
            if (autoScrollRef.current) clearInterval(autoScrollRef.current);
        }
    };
    
    const handleCloseModal = () => {
        setSelectedProject(null);
        resetAutoScroll();
    };

    const titleStyle = `transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} delay-100`;

    return (
        <div>
            <style>{`
                .carousel-container {
                    --slide-width: 80%;
                    /* Aspect ratio = 1:1 for mobile */
                    --padding-bottom: 80%;
                }
                
                @media (min-width: 768px) {
                    .carousel-container {
                        --slide-width: 60%;
                        /* Aspect ratio = 16:9 for desktop */
                        --padding-bottom: 33.75%; /* (60% / (16/9)) */
                    }
                }

                .carousel-track {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    position: relative;
                    width: 100%;
                    height: 0;
                    padding-bottom: var(--padding-bottom);
                    transform-style: preserve-3d;
                    perspective: 1500px;
                }

                .carousel-slide {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: var(--slide-width);
                    height: 100%;
                    margin: 0 auto;
                    border-radius: 0.75rem;
                    overflow: hidden;
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
                    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease, z-index 0.6s;
                    -webkit-box-reflect: below 12px linear-gradient(transparent, transparent, rgba(0,0,0,0.15));
                }

                .carousel-slide[data-active="true"] {
                    cursor: pointer;
                }

                .carousel-slide {
                    transform: translateX(calc(var(--offset) * var(--slide-width) * 0.7)) 
                               scale(calc(1 - 0.2 * var(--abs-offset)))
                               rotateY(calc(var(--direction) * -25deg))
                               translateZ(calc(var(--abs-offset) * -150px));
                    opacity: calc(1 - var(--abs-offset) * 0.5);
                    z-index: calc(${numProjects} - var(--abs-offset));
                }
            `}</style>

            <h2 className={`text-3xl font-bold text-text-primary font-poppins mb-12 flex items-center ${titleStyle}`}>
                <span className="text-accent font-mono text-2xl mr-4">04.</span> Some Things I’ve Built
                <span className="flex-grow h-px bg-border-color ml-6"></span>
            </h2>
            
            <div 
                className="relative"
                onMouseEnter={() => autoScrollRef.current && clearInterval(autoScrollRef.current)}
                onMouseLeave={resetAutoScroll}
            >
                <div className="carousel-container w-full">
                    <ul className="carousel-track">
                        {PROJECTS.map((project, i) => {
                            // FIX: Correct offset calculation for intuitive "scroll left" on next
                            let offset = i - activeIndex;
                            // Handle wrapping for a circular carousel by finding the shortest path
                            if (Math.abs(offset) > numProjects / 2) {
                                offset = offset - (Math.sign(offset) * numProjects);
                            }
                            
                            const direction = Math.sign(offset);
                            const absOffset = Math.abs(offset);
                            
                            return (
                                <li
                                    key={project.title}
                                    className="carousel-slide"
                                    data-active={i === activeIndex}
                                    style={{
                                        ['--offset' as any]: offset,
                                        ['--abs-offset' as any]: absOffset,
                                        ['--direction' as any]: direction,
                                    }}
                                    onClick={() => handleCardClick(i)}
                                >
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                                        <h3 className="text-lg sm:text-xl font-bold font-poppins">{project.title}</h3>
                                        <p className="text-xs sm:text-sm text-slate-300 hidden md:block">{project.description}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                
                <button 
                    onClick={() => handleNavClick(goPrev)} 
                    aria-label="Previous project" 
                    className="absolute top-1/2 -translate-y-1/2 left-0 z-10 p-2 rounded-full text-text-tertiary hover:text-accent bg-component-background/50 hover:bg-component-background shadow-md transition-all duration-300"
                >
                    <ChevronLeftIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
                <button 
                    onClick={() => handleNavClick(goNext)} 
                    aria-label="Next project" 
                    className="absolute top-1/2 -translate-y-1/2 right-0 z-10 p-2 rounded-full text-text-tertiary hover:text-accent bg-component-background/50 hover:bg-component-background shadow-md transition-all duration-300"
                >
                    <ChevronRightIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
            </div>
            
            <div className="flex items-center justify-center space-x-2 mt-8">
                {PROJECTS.map((_, i) => (
                    <button 
                        key={i} 
                        onClick={() => handleDotClick(i)}
                        aria-label={`Go to project ${i + 1}`}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-accent scale-125' : 'bg-border-color hover:bg-text-tertiary'}`}
                    />
                ))}
            </div>

            <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        </div>
    );
};

const Projects = SectionWrapper(ProjectsContent, "projects");
export default Projects;