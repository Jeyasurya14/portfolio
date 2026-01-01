"use client";
import React from "react";
import { motion } from "framer-motion";

const skillsData = {
    Languages: ["Python", "JavaScript", "TypeScript", "C", "C++"],
    Frameworks: ["Next.js", "React", "Django", "FastAPI", "Flask"],
    Databases: ["MongoDB", "MySQL", "PostgreSQL"],
    Tools: ["Docker", "Git", "AWS", "Linux"],
    "Core Domains": ["Full Stack Dev", "AI & ML", "Automation", "IoT"],
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
                    <p className="text-gray-400">Tools and technologies I use to bring ideas to life.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skillsData).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl hover:border-zinc-700 transition-colors"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4 border-l-4 border-primary pl-3">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-sm rounded-md font-medium hover:bg-zinc-700 hover:text-white transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
