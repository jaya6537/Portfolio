import React, { useState } from 'react';

const Footer: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you shortly.');
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <footer id="contact" className="py-16 text-center text-text-tertiary">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-text-primary font-poppins mb-4">Get In Touch</h2>
                <p className="max-w-xl mx-auto mb-8 text-text-secondary">
                    My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>
                
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-6">
                    <div>
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                            className="w-full bg-component-background border border-border-color rounded-md py-3 px-4 text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                            className="w-full bg-component-background border border-border-color rounded-md py-3 px-4 text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-component-background border border-border-color rounded-md py-3 px-4 text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                        ></textarea>
                    </div>
                    <div className="text-center">
                         <button type="submit" className="inline-block bg-transparent text-accent border border-accent font-mono text-lg py-3 px-6 rounded-md hover:bg-accent/10 transition-colors duration-300">
                            Send Message
                        </button>
                    </div>
                </form>

                <p className="font-mono text-sm mt-12">
                    Designed & Built by Jayaswaroop Dandamudi
                </p>
            </div>
        </footer>
    );
};

export default Footer;