import { ChevronRight } from 'lucide-react';
// Simple Blog Section Component
export default function Blog() {
    const blogPosts = [
        {
            id: 1,
            title: "Stop Learning DSA Just for Interviews. Here’s How to Make It Your Real-World Superpower",
            excerpt: "How to Master DSA Patterns That Scale Real Systems and Ace Coding Interviews Without Memorizing 500 Problems.",
            date: "June 28, 2025",
            href: "https://open.substack.com/pub/graynneji/p/dsa-coding-patterns-and-scalable-stsyems?r=2jsdxn&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
            image: "/light_bulb.jpeg",
            category: "Development"
        },
        {
            id: 2,
            title: "The Bug That Could Have Killed My Healthcare App (And How TypeScript Saved the Day)",
            excerpt: "A cautionary tale about JavaScript's hidden dangers and the type safety net that caught them.",
            date: "June 22, 2025",
            href: "https://open.substack.com/pub/graynneji/p/the-bug-that-could-have-killed-my?r=2jsdxn&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
            image: "/ai_man.webp",
            category: "Accessibility"
        },
        {
            id: 3,
            title: "Optimizing React Performance",
            excerpt: "Advanced techniques to make your React applications lightning fast.",
            date: "March 27, 2025",
            href: "#",
            image: "/janey.jpg",
            category: "React"
        }
    ];

    return (
        <section className="py-20 relative" id="blog">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Articles</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Insights and thoughts on web development, design trends, and technology.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map(post => (
                        <div key={post.id} className="bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800 transition-all hover:border-blue-500/50 group">
                            <div className="relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-blue-500/80 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-gray-400 text-sm mb-2">{post.date}</p>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {post.excerpt}
                                </p>
                                <a href="#" className="text-blue-400 flex items-center text-sm font-medium hover:text-blue-300 transition-colors">
                                    Read More
                                    <ChevronRight size={16} className="ml-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#" className="inline-block bg-transparent border border-gray-700 hover:border-blue-500 text-white px-6 py-3 rounded-full transition-all font-medium">
                        View All Articles
                    </a>
                </div>
            </div>
        </section>
    );
}