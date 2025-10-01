import React, { useRef, useEffect, useState } from 'react';

const SectionWrapper = (Component: React.ComponentType<{ isVisible: boolean }>, idName: string): React.FC => {
    
    const HOC: React.FC = () => {
        const sectionRef = useRef<HTMLDivElement>(null);
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.1
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