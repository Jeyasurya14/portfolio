import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-8 border-t border-zinc-800 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} JeyaSurya M. All rights reserved.
                </p>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <span>Built with</span>
                    <Heart size={16} className="text-red-500 fill-red-500" />
                    <span>using Next.js & Tailwind</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
