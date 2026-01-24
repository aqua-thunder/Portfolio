import React from "react";
import { motion } from "motion/react";


export default function Loader({ fadeOut }) {
    return (
        <div className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-700 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <div className="flex flex-col items-center gap-6">
                <motion.img
                    src="../../../Images/logo.png"        // put your logo path here
                    alt="Logo"
                    className="w-24 h-24 mb-4 object-contain"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />

                <p className="text-white tracking-widest uppercase font-semibold text-3xl">Welcome, Visitor!</p>
                <p className="text-[#00ff88] font-bold">Let's dive right in</p>

                <motion.div
                    className="h-[2px] w-40 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent rounded-full"
                    animate={{
                        opacity: [0.3, 1, 0.3],
                        scaleX: [0.6, 1, 0.6],
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />

                <div className="flex items-center justify-center gap-2">
                    <span className="w-3 h-3 bg-[#00ff88] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-3 h-3 bg-[#00ff88] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-3 h-3 bg-[#00ff88] rounded-full animate-bounce"></span>
                </div>
            </div>
        </div>
    );
}
