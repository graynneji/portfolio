import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* About Column */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Portfolio</h3>
                        <p className="text-gray-400 text-sm">
                            Creating stunning digital experiences with modern web technologies and a focus on performance and user experience.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold">Services</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">UI/UX Design</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Responsive Design</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Frontend Architecture</a></li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                            <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold">Contact Info</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2" />
                                <span>contact@example.com</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={16} className="mr-2" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <MapPin size={16} className="mr-2" />
                                <span>San Francisco, CA</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-slate-800 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                    <div className="mt-2 flex justify-center space-x-4">
                        <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}