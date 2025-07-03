// "use client"
// import { useState, useEffect } from 'react';
// import { Menu, X, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';

// export default function HeroNav() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     // Handle scroll effect for navbar
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 10) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className="min-h-screen bg-slate-950 text-white font-sans overflow-hidden">
//             {/* Navigation */}
//             <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
//                 <div className="container mx-auto px-6 flex justify-between items-center">
//                     {/* Logo */}
//                     <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//                         Portfolio
//                     </a>

//                     {/* Desktop Navigation */}
//                     <nav className="hidden md:flex space-x-8">
//                         {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
//                             <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors font-medium">
//                                 {item}
//                             </a>
//                         ))}
//                     </nav>

//                     {/* Social Icons - Desktop */}
//                     <div className="hidden md:flex items-center space-x-4">
//                         <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                             <Github size={20} />
//                         </a>
//                         <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                             <Linkedin size={20} />
//                         </a>
//                         <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                             <Twitter size={20} />
//                         </a>
//                         <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center">
//                             <span>Contact</span>
//                             <ChevronRight size={16} className="ml-1" />
//                         </button>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                         {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>

//                 {/* Mobile Menu */}
//                 <div className={`md:hidden absolute w-full bg-slate-900/95 backdrop-blur-md transition-all duration-300 ease-in-out shadow-lg ${isMenuOpen ? 'max-h-screen py-5' : 'max-h-0 overflow-hidden'}`}>
//                     <div className="container mx-auto px-6 flex flex-col space-y-4">
//                         {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
//                             <a
//                                 key={item}
//                                 href={`#${item.toLowerCase()}`}
//                                 className="text-gray-300 hover:text-white py-2 border-b border-gray-800"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 {item}
//                             </a>
//                         ))}
//                         <div className="flex space-x-4 py-3">
//                             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                                 <Github size={20} />
//                             </a>
//                             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                                 <Linkedin size={20} />
//                             </a>
//                             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                                 <Twitter size={20} />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* Hero Section */}
//             <section className="h-screen flex items-center relative overflow-hidden" id="home">
//                 {/* Background Elements */}
//                 <div className="absolute inset-0 z-0">
//                     <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
//                     <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
//                     <div className="absolute top-40 right-40 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>

//                     {/* Grid Pattern */}
//                     <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
//                 </div>

//                 <div className="container mx-auto px-6 z-10">
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div className="space-y-6">
//                             <div className="inline-block">
//                                 <span className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 rounded-full text-sm font-medium">
//                                     Frontend Developer
//                                 </span>
//                             </div>

//                             <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//                                 Creating <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">stunning</span> digital experiences
//                             </h1>

//                             <p className="text-gray-400 text-lg max-w-lg">
//                                 I design and build modern, responsive web applications with a focus on performance and user experience.
//                             </p>

//                             <div className="flex space-x-4 pt-4">
//                                 <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all font-medium flex items-center">
//                                     <span>View Projects</span>
//                                     <ChevronRight size={18} className="ml-1" />
//                                 </button>
//                                 <button className="bg-transparent border border-gray-700 hover:border-gray-500 text-white px-6 py-3 rounded-full transition-all font-medium">
//                                     About Me
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="hidden md:block relative">
//                             <div className="relative w-full aspect-square max-w-md mx-auto">
//                                 Placeholder for profile image/illustration
//                                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl">
//                                     <img
//                                         src="/api/placeholder/480/480"
//                                         alt="Developer"
//                                         className="w-full h-full object-cover rounded-3xl opacity-90"
//                                     />


//                                     {/* Decorative elements */}
//                                     <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-600/30 rounded-full blur-xl"></div>
//                                     <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600/30 rounded-full blur-xl"></div>
//                                 </div>

//                                 {/* Tech stack floating badges */}
//                                 <div className="absolute -left-8 top-1/4 bg-slate-800/80 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium border border-gray-700 shadow-lg">
//                                     Next.js
//                                 </div>
//                                 <div className="absolute -right-8 top-1/2 bg-slate-800/80 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium border border-gray-700 shadow-lg">
//                                     React
//                                 </div>
//                                 <div className="absolute -bottom-4 left-1/3 bg-slate-800/80 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium border border-gray-700 shadow-lg">
//                                     Tailwind CSS
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }
"use client"
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function HeroNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans overflow-hidden">
            {/* Navigation */}
            <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Gray Ukaegbu
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors font-medium">
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Social Icons - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com/graynneji" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/graynneji" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter size={20} />
                        </a>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center">
                            <span>Contact</span>
                            <ChevronRight size={16} className="ml-1" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden absolute w-full bg-slate-900/95 backdrop-blur-md transition-all duration-300 ease-in-out shadow-lg ${isMenuOpen ? 'max-h-screen py-5' : 'max-h-0 overflow-hidden'}`}>
                    <div className="container mx-auto px-6 flex flex-col space-y-4">
                        {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-300 hover:text-white py-2 border-b border-gray-800"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <div className="flex space-x-4 py-3">
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
                </div>
            </header>

            {/* Hero Section */}
            <section className="h-screen flex items-center relative overflow-hidden" id="home">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-40 right-40 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
                </div>

                <div className="container mx-auto px-6 z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-block">
                                <span className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 rounded-full text-sm font-medium">
                                    Frontend Developer
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                Creating <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">stunning</span> digital experiences
                            </h1>

                            <p className="text-gray-400 text-lg max-w-lg">
                                I design and build modern, responsive web applications with a focus on performance and user experience.
                            </p>

                            <div className="flex space-x-4 pt-4">
                                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all font-medium flex items-center">
                                    <span>View Projects</span>
                                    <ChevronRight size={18} className="ml-1" />
                                </button>
                                <button className="bg-transparent border border-gray-700 hover:border-gray-500 text-white px-6 py-3 rounded-full transition-all font-medium">
                                    About Me
                                </button>
                            </div>
                        </div>

                        <div className="hidden md:block relative">
                            <div className="relative w-full aspect-square max-w-md mx-auto">
                                {/* Placeholder for profile image/illustration */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl">
                                    <div className="w-full h-full rounded-3xl overflow-hidden relative flex items-center justify-center">
                                        {/* Abstract developer illustration using SVG */}
                                        <svg viewBox="0 0 480 480" className="w-full h-full">
                                            <defs>
                                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                                                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
                                                </linearGradient>
                                                <clipPath id="circleClip">
                                                    <circle cx="240" cy="240" r="200" />
                                                </clipPath>
                                            </defs>

                                            {/* Background */}
                                            <rect x="0" y="0" width="480" height="480" fill="#0F172A" />

                                            {/* Abstract background shapes */}
                                            <circle cx="240" cy="240" r="200" fill="url(#grad1)" opacity="0.3" />
                                            <circle cx="180" cy="180" r="100" fill="#3B82F6" opacity="0.2" />
                                            <circle cx="300" cy="300" r="120" fill="#8B5CF6" opacity="0.2" />

                                            {/* Code pattern */}
                                            <g opacity="0.4" clipPath="url(#circleClip)">
                                                {[...Array(12)].map((_, i) => (
                                                    <rect
                                                        key={i}
                                                        x="80"
                                                        y={140 + i * 20}
                                                        width={265.72815890201343}
                                                        height="8"
                                                        rx="4"
                                                        fill="white"
                                                        opacity={0.1 + Math.random() * 0.3}
                                                    />
                                                ))}
                                            </g>

                                            {/* Simple geometric avatar */}
                                            <circle cx="240" cy="180" r="60" fill="#E2E8F0" />
                                            <circle cx="240" cy="320" r="100" fill="#E2E8F0" opacity="0.6" />
                                        </svg>

                                        {/* Code text overlay effect */}
                                        <div className="absolute inset-0 flex items-center justify-center text-blue-500 opacity-20 overflow-hidden select-none">
                                            <div className="text-xs leading-relaxed font-mono transform -rotate-12">
                                                {`<div className="developer">\n  <code>createAwesomeWebsites();</code>\n  <style>{\n    passion: 100%,\n    creativity: infinite\n  }</style>\n</div>`}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-600/30 rounded-full blur-xl"></div>
                                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600/30 rounded-full blur-xl"></div>
                                </div>

                                {/* Tech stack floating badges */}
                                <div className="absolute -left-8 top-1/4 bg-slate-800/80 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium border border-gray-700 shadow-lg">
                                    Next.js
                                </div>
                                <div className="absolute -right-8 top-1/2 bg-slate-800/80 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium border border-gray-700 shadow-lg">
                                    React
                                </div>
                                <div className="absolute -bottom-4 left-1/3 bg-slate-800/80 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium border border-gray-700 shadow-lg">
                                    Tailwind CSS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}