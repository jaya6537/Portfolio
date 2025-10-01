import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="py-16 text-center text-text-tertiary">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-text-primary font-poppins mb-4">Get In Touch</h2>
                <p className="max-w-xl mx-auto mb-8 text-text-secondary">
                    My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-block bg-transparent text-accent border border-accent font-mono text-lg py-3 px-6 rounded-md hover:bg-accent/10 transition-colors duration-300">
                    Say Hello
                </a>
                <p className="font-mono text-sm mt-12">
                    Designed & Built by Jayaswaroop Dandamudi
                </p>
            </div>
        </footer>
    );
};

export default Footer;