import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
    // Check for hover support and reduced motion preference
    const isMotionSafe = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
    const supportsHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const shouldRenderCursor = isMotionSafe && supportsHover;

    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorRingRef = useRef<HTMLDivElement>(null);
    
    // Store positions and scale in refs to use in the animation loop without causing re-renders
    const mousePos = useRef({ x: -100, y: -100 });
    const ringPos = useRef({ x: -100, y: -100 });
    const dotScale = useRef(1);
    
    useEffect(() => {
        if (!shouldRenderCursor) return;

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            const target = e.target as HTMLElement;
            const isInteractive = !!target.closest('a, button');
            
            if (cursorRingRef.current) {
                cursorRingRef.current.classList.toggle('is-interactive', isInteractive);
            }
            dotScale.current = isInteractive ? 0 : 1;
        };

        // Linear interpolation for a smooth "chase" effect
        const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;
        
        let animationFrameId: number;

        const followMouse = () => {
            // Instantly move the dot and apply scale
            if (cursorDotRef.current) {
                const dotX = mousePos.current.x - cursorDotRef.current.offsetWidth / 2;
                const dotY = mousePos.current.y - cursorDotRef.current.offsetHeight / 2;
                cursorDotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) scale(${dotScale.current})`;
            }

            // Make the ring smoothly follow the cursor
            if (cursorRingRef.current) {
                ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.2);
                ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.2);
                const ringX = ringPos.current.x - cursorRingRef.current.offsetWidth / 2;
                const ringY = ringPos.current.y - cursorRingRef.current.offsetHeight / 2;
                cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            }
            
            animationFrameId = requestAnimationFrame(followMouse);
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        followMouse();

        // Cleanup function
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [shouldRenderCursor]);

    if (!shouldRenderCursor) {
        return null;
    }

    return (
        <>
            <style>{`
                body, a, button {
                    cursor: none !important;
                }
                .cursor-dot {
                    transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* transition for the scale effect */
                }
                .cursor-ring {
                    background-color: transparent; /* Ensure default background is transparent */
                }
                .cursor-ring.is-interactive {
                    width: 60px;
                    height: 60px;
                    background-color: var(--color-accent);
                    opacity: 0.3;
                    border-width: 0;
                }
            `}</style>
            <div
                ref={cursorDotRef}
                aria-hidden="true"
                className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999]"
            />
            <div
                ref={cursorRingRef}
                aria-hidden="true"
                className="cursor-ring fixed top-0 left-0 w-10 h-10 border-2 border-accent rounded-full pointer-events-none z-[9999] transition-[width,height,border-width,background-color,opacity] duration-300 ease-in-out"
            />
        </>
    );
};

export default CustomCursor;