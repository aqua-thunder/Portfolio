import React from "react";
import { motion } from "motion/react";


export default function Loader({ fadeOut }) {
    return (
        <div className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-700 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}>

            <motion.div className="absolute top-36 left-[30vw] w-96 h-96 rounded-full  bg-[#00ff88]/25 blur-3xl z-0"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.65, 0.9, 0.35],
                    }}
                    transition={{
                        duration: 12,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />

            <div className="flex flex-col items-center gap-6">
                <div className="w-14 h-14 border-4 border-white/20 border-t-[#00ff88] rounded-full animate-spin"></div>

                <p className="text-white tracking-widest uppercase font-bold text-2xl">Welcome, Visitor!</p>
                <p className="text-[#00ff88] font-bold">Let's dive right in</p>
                <div className="flex items-center justify-center gap-2">
                    <span className="w-3 h-3 bg-[#00ff88] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-3 h-3 bg-[#00ff88] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-3 h-3 bg-[#00ff88] rounded-full animate-bounce"></span>
                </div>
            </div>
        </div>
    );
}
