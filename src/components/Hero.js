"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* Background Gradient Spotlights */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                        Available for Hire
                    </span>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        I build real-world <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            Full Stack & AI Apps
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                >
                    Full Stack Developer | AI & ML Engineer | IoT Enthusiast.
                    <br />
                    Obsessed with scalability, automation, and shipping production-ready code.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#projects"
                        className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-blue-600 transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20"
                    >
                        View Projects <ArrowRight size={20} />
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-4 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 transition-all border border-white/10"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
