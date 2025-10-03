import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start mt-5">
            <p className="text-accent text-lg mb-4 font-mono">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary font-poppins">
                {PERSONAL_INFO.name}.
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-secondary mt-2 font-poppins">
                I build things for the web.
            </h2>
            <p className="text-text-secondary mt-6 max-w-xl text-lg">
                I’m a {PERSONAL_INFO.title} specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products.
            </p>
             <div className="mt-12">
                <a href="#projects" className="inline-block bg-transparent text-accent border border-accent font-mono text-lg py-3 px-6 rounded-md hover:bg-accent/10 transition-colors duration-300">
                    Check out my work!
                </a>
            </div>
        </section>
    );
};

export default Hero;