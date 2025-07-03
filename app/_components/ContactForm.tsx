import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { sendContactEmail } from '../_lib/actions';



// Contact Section Component

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const result = await sendContactEmail(new FormData(e.currentTarget));
            if (result && result.success) {
                setSubmitStatus('success');
                setFormState({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitStatus(result?.error || 'An error occurred.');
            }
        } catch (error) {
            setSubmitStatus('An error occurred.');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <section className="py-20 relative" id="contact">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out using the contact form below.
                    </p>
                </div>

                <div className="grid md:grid-cols-12 gap-10">
                    {/* Contact Info */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 space-y-6">
                            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>

                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-500/10 p-3 rounded-full text-blue-400">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="text-gray-300 font-medium">Email</h4>
                                    <p className="text-gray-400">graynneji405@gmail.com</p>
                                    <a href="mailto:graynneji405@gmail.com" className="text-blue-400 text-sm hover:underline">Send an email</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-500/10 p-3 rounded-full text-purple-400">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="text-gray-300 font-medium">Phone</h4>
                                    <p className="text-gray-400">+234 7031362034</p>
                                    <a href="tel:+15551234567" className="text-blue-400 text-sm hover:underline">Call me</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-500/10 p-3 rounded-full text-blue-400">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-gray-300 font-medium">Location</h4>
                                    <p className="text-gray-400">Lagos, Nigeria</p>
                                    <a href="#" className="text-blue-400 text-sm hover:underline">Get directions</a>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800">
                            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <a href="https://github.com/graynneji" className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
                                    <Github size={24} className="text-gray-300 mb-2" />
                                    <span className="text-gray-400 text-sm">Github</span>
                                </a>
                                <a href="https://linkedin.com/in/graynneji" className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
                                    <Linkedin size={24} className="text-gray-300 mb-2" />
                                    <span className="text-gray-400 text-sm">LinkedIn</span>
                                </a>
                                <a href="#" className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
                                    <Twitter size={24} className="text-gray-300 mb-2" />
                                    <span className="text-gray-400 text-sm">Twitter</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:col-span-7">
                        <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800">
                            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                            {submitStatus === 'success' && (
                                <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-lg mb-6">
                                    Your message has been sent successfully!
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        //   rows="5"
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all font-medium flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={18} className="ml-2" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}