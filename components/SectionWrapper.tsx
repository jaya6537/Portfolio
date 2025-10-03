import React, { useRef, useEffect, useState } from 'react';

const SectionWrapper = (Component: React.ComponentType<{ isVisible: boolean }>, idName: string): React.FC => {
    
    const HOC: React.FC = () => {
        const sectionRef = useRef<HTMLDivElement>(null);
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    // Update visibility state based on whether the section is intersecting with the viewport
                    setIsVisible(entry.isIntersecting);
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.3
                }
            );

            const currentRef = sectionRef.current;
            if (currentRef) {
                observer.observe(currentRef);
            }

            return () => {
                if (currentRef) {
                    observer.unobserve(currentRef);
                }
            };
        }, []);

        return (
            <section 
                id={idName} 
                ref={sectionRef} 
                className="py-16 md:py-24"
                style={{ scrollMarginTop: '100px' }}
            >
                <Component isVisible={isVisible} />
            </section>
        );
    };

    HOC.displayName = `SectionWrapper(${Component.displayName || Component.name || 'Component'})`;

    return HOC;
};

export default SectionWrapper;