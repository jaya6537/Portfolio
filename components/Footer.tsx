import React, { useState } from 'react';
import Toast from './Toast';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
    // IMPORTANT: Replace this with your own Access Key from https://web3forms.com/
    const WEB3FORMS_ACCESS_KEY = '6d313f5f-ed52-47cd-873b-379aecaeda07';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
            setToast({
                message: "Please replace 'YOUR_ACCESS_KEY_HERE' in Footer.tsx to enable email sending.",
                type: 'error',
            });
            return;
        }

        setIsSubmitting(true);
        setToast(null);

        const formPayload = {
            ...formData,
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `New message from ${formData.name} via Portfolio`,
            from_name: formData.name,
            botcheck: "" // web3forms recommended field for bot protection
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formPayload),
            });

            const result = await response.json();

            if (result.success) {
                setToast({
                    message: 'Message sent successfully! I will get back to you shortly.',
                    type: 'success',
                });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                console.error("Error from web3forms:", result);
                setToast({
                    message: result.message || 'Something went wrong. Please try again.',
                    type: 'error',
                });
            }
        } catch (error) {
            console.error("Submission error:", error);
            setToast({
                message: 'An error occurred. Please check your connection and try again.',
                type: 'error',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
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
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="inline-flex items-center justify-center bg-transparent text-accent border border-accent font-mono text-lg py-3 px-6 rounded-md hover:bg-accent/10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </div>
                    </form>

                    <p className="font-mono text-sm mt-12">
                        Designed & Built by Jayaswaroop Dandamudi
                    </p>
                </div>
            </footer>
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </>
    );
};

export default Footer;