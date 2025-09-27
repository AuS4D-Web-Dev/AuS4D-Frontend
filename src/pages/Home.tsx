import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <main className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Display','SF_Pro_Text','Helvetica_Neue',sans-serif]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
                
                * {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                }
                
                @media print {
                    @page { size: A4; margin: 16mm; }
                    .no-print { display: none !important; }
                    body, main { color: #000 !important; background: #fff !important; }
                }
                
                .glass-effect {
                    background: rgba(255, 255, 255, 0.72);
                    backdrop-filter: saturate(180%) blur(20px);
                    -webkit-backdrop-filter: saturate(180%) blur(20px);
                }
                
                .dark .glass-effect {
                    background: rgba(29, 29, 31, 0.72);
                }
                
                .gradient-text {
                    background: linear-gradient(90deg, #007AFF 0%, #5856D6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .dark .gradient-text {
                    background: linear-gradient(90deg, #0A84FF 0%, #C356FF 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .hero-gradient {
                    background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), transparent);
                }
                
                .dark .hero-gradient {
                    background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.15), transparent);
                }
                
                .card-hover {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .card-hover:hover {
                    transform: scale(1.02) translateY(-4px);
                }
                
                .button-primary {
                    background: #007AFF;
                    transition: all 0.2s ease;
                }
                
                .button-primary:hover {
                    background: #0051D5;
                    transform: scale(1.05);
                }
                
                .button-secondary {
                    background: transparent;
                    border: 1px solid #007AFF;
                    color: #007AFF;
                    transition: all 0.2s ease;
                }
                
                .button-secondary:hover {
                    background: #007AFF;
                    color: white;
                }
                
                .dark .button-secondary {
                    border-color: #0A84FF;
                    color: #0A84FF;
                }
                
                .dark .button-secondary:hover {
                    background: #0A84FF;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                .floating {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>

            {/* Navigation */}
            <nav className={`no-print fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'glass-effect border-b border-gray-200/50 dark:border-gray-800/50' : ''
            }`}>
                <div className="max-w-6xl mx-auto px-6 h-12 flex justify-between items-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xl font-semibold gradient-text"
                    >
                        AuS4D
                    </motion.span>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="hidden md:flex space-x-8 text-sm"
                    >
                        <a href="#hero" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Home</a>
                        <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">About</a>
                        <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Features</a>
                        <a href="#content" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Learn</a>
                        <a href="#footer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Contact</a>
                    </motion.div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="hero-gradient absolute inset-0 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="w-96 h-96 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl floating" />
                </motion.div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-6"
                    >
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium rounded-full">
                            Student-Led Network
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                    >
                        Australian Students
                        <span className="block gradient-text">for Development</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto font-light"
                    >
                        Connecting minds. Building futures. Join Australia's first student-led network for international development and humanitarian action.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <button className="button-primary text-white px-8 py-3 rounded-full font-medium">
                            Get Started
                        </button>
                        <button className="button-secondary px-8 py-3 rounded-full font-medium">
                            Learn More
                        </button>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
                    >
                        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/30">
                <div className="max-w-6xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Empowering the Next Generation
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            We connect, educate, and inspire students to drive meaningful change
                        </p>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {[
                            { icon: "🎓", title: "Learn", desc: "Engage with experts and practitioners to understand current debates and challenges." },
                            { icon: "🤝", title: "Connect", desc: "Build a network with peers committed to justice, equity, and sustainability." },
                            { icon: "🚀", title: "Collaborate", desc: "Work together on projects and ideas that drive meaningful, lasting change." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="card-hover bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-800/50"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            What You Can Expect
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Real opportunities. Real impact.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: "💡", title: "Expert Talks", desc: "Regular sessions with practitioners sharing field insights" },
                            { icon: "🌟", title: "Student Events", desc: "Student-led initiatives that make a real difference" },
                            { icon: "📈", title: "Career Development", desc: "Mentoring and guidance on development career paths" },
                            { icon: "🌍", title: "Global Network", desc: "Connect with international development communities" },
                            { icon: "📚", title: "Resources", desc: "Access to cutting-edge research and learning materials" },
                            { icon: "🎯", title: "Real Projects", desc: "Hands-on experience with actual development projects" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeInUp}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                                    <div className="text-3xl mb-3">{item.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section id="content" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/30 dark:to-black">
                <div className="max-w-4xl mx-auto space-y-12">
                    <motion.article
                        {...fadeInUp}
                        className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50 dark:border-gray-800/50"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                            What is International Development?
                        </h2>
                        <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                International development is about understanding and responding to the ways our world is changing —
                                socially, economically, politically, culturally, and environmentally. It's concerned with human
                                well-being, justice, and sustainability, while recognising that "development" itself is debated
                                and contested.
                            </p>
                            <p>
                                It encompasses both broad processes of change and intentional efforts to address global challenges
                                like poverty reduction, human rights, peacebuilding, climate action, and building sustainable futures.
                            </p>
                            <p>
                                Questions of power and justice sit at the centre: Who decides what progress looks like? Whose voices
                                are included? How can we avoid reproducing colonial legacies or creating new inequalities?
                            </p>
                            <p className="font-medium text-gray-900 dark:text-white">
                                Ultimately, it's about working together across borders and scales to imagine and build fairer,
                                more sustainable, and more inclusive futures for all.
                            </p>
                        </div>
                    </motion.article>

                    <motion.article
                        {...fadeInUp}
                        className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12 border border-blue-200/50 dark:border-blue-800/50"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            What's Changing Right Now?
                        </h2>
                        <ul className="space-y-4">
                            {[
                                { title: "Shrinking aid budgets", desc: "Governments are cutting or redirecting aid towards short-term relief." },
                                { title: "Institutional shifts", desc: "Major agencies are being restructured, disrupting projects and leadership." },
                                { title: "Geopolitics over poverty", desc: "Aid increasingly tied to national interests like security and trade." },
                                { title: "Pressure on vulnerable sectors", desc: "Health, climate, and fragile states face funding strain." },
                                { title: "New approaches", desc: "Growing emphasis on efficiency, innovation, and local leadership." }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start space-x-3">
                                    <span className="text-blue-500 dark:text-blue-400 mt-1">→</span>
                                    <div>
                                        <span className="font-semibold text-gray-900 dark:text-white">{item.title}:</span>
                                        <span className="text-gray-600 dark:text-gray-300 ml-2">{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-gray-700 dark:text-gray-300 font-medium">
                            These shifts show why spaces like AuS4D are crucial for making sense of change and exploring
                            how young people can contribute to a better world.
                        </p>
                    </motion.article>
                </div>
            </section>

            {/* Footer */}
            <footer id="footer" className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="font-semibold mb-4 gradient-text">AuS4D</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Australian Students for Development - Building a better tomorrow, today.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <div className="space-y-2 text-sm">
                                <a href="#about" className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">About Us</a>
                                <a href="#features" className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">Programs</a>
                                <a href="#content" className="block text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">Resources</a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Connect</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Join our network and be part of the change.
                            </p>
                            <button className="mt-4 button-primary text-white px-6 py-2 rounded-full text-sm font-medium">
                                Join Us
                            </button>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} AuS4D — Built by Leran Peng & Runzhi Zhao (UWA)</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}