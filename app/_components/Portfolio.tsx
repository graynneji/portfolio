"use client"
import { useState, useEffect } from 'react';
import {
    Menu,
    X,
    Github,
    Linkedin,
    Twitter,
    ChevronRight,
    Terminal,
    Smartphone,
    Server,
    ServerCog,
    ListStart,
    Database,
    Cloud,
    GitBranchPlus,
    Workflow,
    LayoutGrid,
    CodeSquare,
    Box
} from 'lucide-react';
import Image from 'next/image';
import Contact from './ContactForm';
import Footer from './Footer';
import Blog from './Blog';
import MyImage from "@/public/IMG_9015.jpg"
import { SkillBadge } from './SkillBadge';
import Link from 'next/link';


export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('all');

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation links
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ];

    // Social links
    const socialLinks = [
        { name: 'GitHub', href: 'https://github.com/graynneji', icon: Github },
        { name: 'LinkedIn', href: '#', icon: Linkedin },
        { name: 'Twitter', href: '#', icon: Twitter }
    ];

    // Skills configuration
    type SkillPosition =
        | 'center-top'
        | 'left-top'
        | 'right-top'
        | 'left-middle'
        | 'right-middle'
        | 'left-bottom'
        | 'right-bottom'
        | 'center-bottom'
        | 'center'
        | 'center-abstract'

    const skills: Array<{
        icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
        text: string;
        color: string;
        position: SkillPosition;
    }> = [
            { icon: Terminal, text: "React / Next.js", color: "#61DAFB", position: "center-top" },
            { icon: Terminal, text: "TypeScript", color: "#3178C6", position: "left-top" },
            { icon: Smartphone, text: "React Native", color: "#61DAFB", position: "right-top" },
            { icon: Server, text: "Node.js", color: "#68A063", position: "left-middle" },
            { icon: Database, text: "MongoDB", color: "#47A248", position: "right-middle" },
            { icon: Cloud, text: "AWS", color: "#FF9900", position: "left-bottom" },
            { icon: GitBranchPlus, text: "Git", color: "#F05032", position: "right-bottom" },
            { icon: LayoutGrid, text: "System Design", color: "#9B51E0", position: "center-bottom" },
            { icon: ListStart, text: "RabbitMQ", color: "#9B51E0", position: "center" },
            { icon: ServerCog, text: "Redis", color: "#F05032", position: "center-abstract" }
        ];

    // Project data
    const projects = [
        {
            id: 1,
            title: "Soullve Mental Health Chat App",
            description: "Secure mental health platform connecting users with therapists through real-time chat and scheduling",
            tags: ["nextjs", "supabase", "redis", "api", "rabbitMQ"],
            image: "/soullve.png",
            link: "https://soullvelte.vercel.app/"
        },
        {
            id: 2,
            title: "Rental App Admin",
            description: "Comprehensive dashboard for property managers with analytics, booking management and tenant tracking",
            tags: ["react", "supabase", "maps"],
            image: "/tricia-kissi.png",
            link: "#"
        },
        {
            id: 3,
            title: "Rental App Client",
            description: "User-friendly rental search platform with virtual tours, instant booking and payment processing",
            tags: ["nextjs", "api", "maps", "supabase"],
            image: "/eleganteshop.png",
            link: "#"
        },
        {
            id: 4,
            title: "Betterspace",
            description: "Real-time enterprise mental health platform with integrated messaging and automated scheduling system",
            tags: ["react native", "nextjs", "css module", "api", "rabbitMQ", "tailwindCss", "redis"],
            image: "/tourbuddy.png",
            link: "https://betterspace.ng"
        }
    ];

    // Filter projects based on active tab
    const filteredProjects = activeTab === 'all'
        ? projects
        : projects.filter(project => project.tags.includes(activeTab));

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans">
            {/* Navigation */}
            <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Gray Ukaegbu
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white transition-colors font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop Social Links */}
                        <div className="hidden md:flex items-center space-x-4">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <link.icon size={20} />
                                </Link>
                            ))}
                            <button className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center">
                                <span>Contact</span>
                                <ChevronRight size={16} className="ml-1" />
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden absolute left-0 right-0 bg-slate-900/95 backdrop-blur-md transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[400px] py-5' : 'max-h-0 overflow-hidden'}`}>
                        <div className="container mx-auto px-6 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white py-2 border-b border-gray-800"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex space-x-4 py-3">
                                {socialLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <link.icon size={20} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="min-h-screen flex items-center relative overflow-hidden pt-20 lg:pt-0" id="home">
                {/* Background Elements - keep as is */}
                <div className="absolute inset-0 z-0">
                    {/* ... background elements ... */}
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <div className="space-y-6 text-center lg:text-left">
                            <div className="inline-block">
                                <span className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 rounded-full text-sm font-medium">
                                    Software Engineer
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                Building <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Scalable</span> Web & Mobile Applications
                            </h1>

                            <p className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
                                I craft modern, responsive, and secure digital solutions with a focus on clean architecture, performance, and seamless user experience.                            </p>

                            {/* Add back the buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all font-medium flex items-center justify-center">
                                    <span>View Projects</span>
                                    <ChevronRight size={18} className="ml-1" />
                                </button>
                                <button className="bg-transparent cursor-pointer border border-gray-700 hover:border-gray-500 text-white px-6 py-3 rounded-full transition-all font-medium">
                                    About Me
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Skills Cloud */}
                        <div className="hidden lg:block relative">
                            <div className="relative w-full aspect-square max-w-xl mx-auto">
                                {/* Center glow effect */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800/40 w-[300px] h-[300px] rounded-full blur-xl"></div>
                                {/* Code text overlay effect */}
                                <div className="absolute inset-0 flex items-center justify-center text-[#ffffff] opacity-20 overflow-hidden select-none">
                                    <div className="text-lg leading-relaxed font-mono transform -rotate-12">
                                        {`<div className="developer">\n  <code>createAwesomeWebsites();</code>\n  <style>{\n    passion: 100%,\n    creativity: infinite\n  }</style>\n</div>`}
                                    </div>
                                </div>
                                {/* Skills badges container */}
                                <div className="absolute inset-0">
                                    {skills.map((skill, index) => {
                                        const positions = {
                                            'center-top': 'left-1/2 -translate-x-1/2 top-0 -rotate-0',
                                            'left-top': 'left-0 top-1/4 -rotate-12',
                                            'right-top': 'right-[-12%] top-1/4 -rotate-6',
                                            'left-middle': 'left-0 top-1/2 -translate-y-1/2 -rotate-0',
                                            'right-middle': 'right-[-12%] top-1/2 -translate-y-1/2 -rotate-45',
                                            'left-bottom': 'left-0 bottom-1/4 -rotate-45',
                                            'right-bottom': 'right-[-12%] bottom-1/4 -rotate-90',
                                            'center-bottom': 'left-1/2 -translate-x-1/2 bottom-0 -rotate-3',
                                            'center': 'left-1/2 -translate-x-1/2 bottom-1/2 transform -rotate-12',
                                            'center-abstract': 'left-1/2 -translate-x-1/2 bottom-[24%] transform -rotate-90'
                                        };

                                        return (
                                            <div
                                                key={skill.text}
                                                className={`absolute ${positions[skill.position]} transition-all duration-300 hover:scale-110`}
                                            >
                                                <SkillBadge
                                                    icon={skill.icon}
                                                    text={skill.text}
                                                    color={skill.color}
                                                    className="whitespace-nowrap"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rest of your sections... */}
            {/* About Section */}
            <section className="py-20 relative" id="about">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span></h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-12 gap-12 items-center">
                        <div className="md:col-span-5 space-y-8">
                            <div className="relative">
                                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-slate-800 relative max-w-sm">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"></div>
                                    {/* Replace with your own image */}
                                    <Image
                                        src={MyImage}
                                        width={100}
                                        height={100}
                                        quality={100}
                                        unoptimized
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-4 border-blue-500/30 rounded-2xl"></div>
                                <div className="absolute -z-10 -top-4 -left-4 w-full h-full border-4 border-purple-500/30 rounded-2xl"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-800">
                                    <h3 className="font-bold text-xl text-blue-400 mb-1">50+</h3>
                                    <p className="text-gray-400 text-sm">Projects Completed</p>
                                </div>
                                <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-800">
                                    <h3 className="font-bold text-xl text-purple-400 mb-1">5+ Years</h3>
                                    <p className="text-gray-400 text-sm">Experience</p>
                                </div>
                                <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-800">
                                    <h3 className="font-bold text-xl text-blue-400 mb-1">30+</h3>
                                    <p className="text-gray-400 text-sm">Happy Clients</p>
                                </div>
                                <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-800">
                                    <h3 className="font-bold text-xl text-purple-400 mb-1">100%</h3>
                                    <p className="text-gray-400 text-sm">Client Satisfaction</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-7 space-y-6">
                            <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800">
                                <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
                                <p className="text-gray-300 mb-4">
                                    I'm a passionate front-end developer with expertise in creating modern, responsive web applications. With over 5 years of experience in the industry, I specialize in translating complex design requirements into clean, functional code.
                                </p>
                                <p className="text-gray-300">
                                    My approach combines technical excellence with creative problem-solving to deliver exceptional user experiences. I'm constantly exploring new technologies and methodologies to stay at the forefront of web / mobile development.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">My Skills</h3>

                                <div className="space-y-3">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-300">Next.js / React / Javascript / Typescript / Python</span>
                                            <span className="text-sm text-gray-400">95%</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-300">PostgreSQL / MongoDB</span>
                                            <span className="text-sm text-gray-400">90%</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-300">Tailwind CSS / Css / Sass / Less</span>
                                            <span className="text-sm text-gray-400">95%</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-300">UI/UX Design</span>
                                            <span className="text-sm text-gray-400">85%</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <a
                                    href="/GrayUkaegbu.pdf"
                                    download
                                    className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all font-medium flex items-center"
                                >
                                    <span>Download CV</span>
                                    <ChevronRight size={18} className="ml-1" />
                                </a>
                                <button className="bg-transparent border border-gray-700 hover:border-gray-500 text-white px-6 py-3 rounded-full transition-all font-medium">
                                    <Link href="#contact" >
                                        Contact Me
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 relative" id="projects">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span></h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Browse through a selection of my recent projects showcasing my skills and expertise in web development.
                        </p>
                    </div>

                    {/* Project Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {['all', 'nextjs', 'react', 'ui', 'api'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-full transition-all ${activeTab === tab
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                                    : 'bg-slate-900/50 text-gray-400 hover:text-white border border-slate-800'
                                    }`}
                            >
                                {tab === 'all' ? 'All' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 text-sm">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2 py-1 rounded-full bg-slate-800 text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={project.link}
                                        className="text-blue-400 flex items-center text-sm font-medium hover:text-blue-300 transition-colors"
                                    >
                                        View Project
                                        <ChevronRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => setActiveTab("all")}
                            className="inline-block bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all font-medium"
                        >
                            View All Projects
                        </button>
                    </div>
                </div>
            </section>

            <Contact />
            <Blog />
            <Footer />
        </div>
    );
}