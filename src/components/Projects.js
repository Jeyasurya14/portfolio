"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
    {
        title: "Newsletter Platform",
        description: "A comprehensive solution for creating, sending, and tracking newsletters. Built for scalability and ease of use.",
        tags: ["Next.js", "TailwindCSS", "PostgreSQL", "Node.js"],
        live: "https://codex.learn-made.in",
        github: "#"
    },
    {
        title: "Live Coding Challenge Platform",
        description: "Real-time coding environment for developers to solve algorithmic challenges and compete.",
        tags: ["React", "Express", "MongoDB", "WebSockets"],
        live: "https://challenge.learn-made.in",
        github: "#"
    },
    {
        title: "Internship Platform",
        description: "Connecting students with opportunities. Features listing management, application tracking, and user profiles.",
        tags: ["Next.js", "Firebase", "TailwindCSS"],
        live: "https://learn-made.in",
        github: "#"
    },
    {
        title: "SkillUp Learning Platform",
        description: "Interactive e-learning portal with course management, progress tracking, and certification systems.",
        tags: ["MERN Stack", "Redux", "AWS"],
        live: "https://upskill.learn-made.in",
        github: "#"
    },
    {
        title: "30 Days – 30 Projects",
        description: "A showcase of consistency and breadth. 30 diverse web applications built in 30 days.",
        tags: ["JavaScript", "HTML/CSS", "API Integration"],
        live: "https://project.learn-made.in",
        github: "#"
    },
    {
        title: "Chennai House Price Prediction",
        description: "Machine Learning model to predict real estate prices in Chennai based on historical data.",
        tags: ["Python", "Scikit-Learn", "FastAPI", "Pandas"],
        github: "#" // No live link provided, assuming code only
    },
    {
        title: "Stock Prediction Portal",
        description: "AI-driven stock market trend analysis and prediction tool using LSTM neural networks.",
        tags: ["Python", "TensorFlow", "React", "Flask"],
        github: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Work</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of projects that demonstrate my ability to ship production-ready applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-[#18181b] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-colors flex flex-col"
                        >
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Code2 size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        {project.github !== "#" && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-6 flex-grow line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
