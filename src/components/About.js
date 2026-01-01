"use client";
import React from "react";
import { motion } from "framer-motion";
import { Rocket, Server, Brain } from "lucide-react";

const qualities = [
    {
        icon: <Rocket className="text-blue-400" size={32} />,
        title: "Production Mindset",
        description: "I don't just write code; I ship products. My focus is on building scalable, reliable applications that solve real user problems."
    },
    {
        icon: <Server className="text-emerald-400" size={32} />,
        title: "Full Stack & DevOps",
        description: "From database design to frontend polish and CI/CD pipelines, I handle the entire lifecycle of web application development."
    },
    {
        icon: <Brain className="text-purple-400" size={32} />,
        title: "Continuous Learning",
        description: "Technology moves fast, and so do I. I'm constantly exploring new tools in AI, ML, and automation to stay ahead of the curve."
    }
];

const About = () => {
    return (
        <section id="about" className="py-20 bg-zinc-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Me</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        I am <span className="text-primary font-semibold">JeyaSurya M</span>, a Full Stack Developer and AI Engineer passionate about building systems that matter.
                        With a strong foundation in modern web technologies and a keen interest in Machine Learning,
                        I bridge the gap between intelligent algorithms and user-friendly interfaces.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {qualities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center hover:bg-zinc-800/80 transition-all"
                        >
                            <div className="bg-zinc-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
