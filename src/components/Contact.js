"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Youtube, Send, Loader2 } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Let's Build Something Amazing</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Whether you have a project idea, a question, or just want to say hi, I'm always open to discussing new opportunities and collaborations.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:jeyasurya.in@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                                    <Mail size={24} />
                                </div>
                                <span className="text-lg">jeyasurya.in@gmail.com</span>
                            </a>

                            <a href="https://github.com/jeyasurya14" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                                    <Github size={24} />
                                </div>
                                <span className="text-lg">github.com/jeyasurya14</span>
                            </a>

                            <a href="https://www.fiverr.com/s/vvwl9lN" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-green-500 transition-colors">
                                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                                    <span className="font-bold text-xl">fi</span>
                                </div>
                                <span className="text-lg">Hire me on Fiverr</span>
                            </a>

                            <a href="https://youtube.com/@LearnMadeAcademy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-red-500 transition-colors">
                                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                                    <Youtube size={24} />
                                </div>
                                <span className="text-lg">LearnMade Academy</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white transition-all resize-none"
                                    placeholder="How can I help you?"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-3 px-6 bg-primary text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <>Sending... <Loader2 className="animate-spin" size={18} /></>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                            {status === "success" && (
                                <p className="text-green-400 text-center text-sm">Message sent successfully!</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-400 text-center text-sm">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
