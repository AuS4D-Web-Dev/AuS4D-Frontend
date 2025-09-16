import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-scroll";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <span className="text-xl font-bold text-indigo-400">AuS4D</span>
                    <div className="space-x-6">
                        <Link
                            to="hero"
                            smooth={true}
                            duration={600}
                            className="cursor-pointer hover:text-indigo-300 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={600}
                            className="cursor-pointer hover:text-indigo-300 transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            to="features"
                            smooth={true}
                            duration={600}
                            className="cursor-pointer hover:text-indigo-300 transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            to="footer"
                            smooth={true}
                            duration={600}
                            className="cursor-pointer hover:text-indigo-300 transition-colors"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                id="hero"
                className="h-screen flex flex-col justify-center items-center text-center px-6"
            >
                <motion.img
                    src="/vite.svg"
                    alt="Logo"
                    initial={{ opacity: 0, y: -50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-28 h-28 mb-6"
                />
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="text-5xl md:text-7xl font-extrabold"
                >
                    Welcome to <span className="text-indigo-400">AuS4D</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mt-4 text-lg md:text-2xl text-gray-300"
                >
                    Smooth animations, modern design, powered by React & Tailwind
                </motion.p>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="min-h-screen flex flex-col justify-center items-center px-10"
            >
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="max-w-3xl"
                >
                    <h2 className="text-4xl font-bold mb-4 text-indigo-400">About Us</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        This landing page demonstrates how to build a beautiful, animated
                        scrolling experience using React, TailwindCSS, and Framer Motion.
                    </p>
                </motion.div>
            </section>

            {/* Features Section */}
            <section
                id="features"
                className="min-h-screen grid grid-cols-1 md:grid-cols-3 gap-8 px-12 py-20"
            >
                {["Fast", "Beautiful", "Interactive"].map((title, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.3, duration: 1 }}
                        className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
                            {title}
                        </h3>
                        <p className="text-gray-400">
                            {title === "Fast" &&
                                "Optimized with Vite and React for blazing fast performance."}
                            {title === "Beautiful" &&
                                "Crafted with TailwindCSS for a modern and elegant look."}
                            {title === "Interactive" &&
                                "Animations powered by Framer Motion for a delightful UX."}
                        </p>
                    </motion.div>
                ))}
            </section>

            {/* Footer */}
            <footer
                id="footer"
                className="py-10 text-center text-gray-500 text-sm bg-gray-900"
            >
                © 2025 AuS4D — Built by Leran Peng and Runzhi Zhao from UWA
            </footer>
        </main>
    );
}
