import React from "react";
import { motion } from "motion/react";

export default function Loader({ fadeOut }) {
    const name = "AYUSH";
    const letters = name.split("");

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center transition-opacity duration-700 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
            {/* Ambient background glow */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full bg-[#00ff88]/10 blur-[120px]"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />

            {/* Rotating ring - outer */}
            <motion.div
                className="absolute w-44 h-44 rounded-full border border-[#00ff88]/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            />

            {/* Rotating ring - middle */}
            <motion.div
                className="absolute w-36 h-36 rounded-full border border-dashed border-[#00ff88]/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 5, ease: "linear", repeat: Infinity }}
            />

            {/* Orbiting dot */}
            <motion.div
                className="absolute w-44 h-44"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#00ff88] rounded-full shadow-[0_0_12px_#00ff88,0_0_24px_#00ff88]" />
            </motion.div>

            {/* Center content */}
            <div className="relative flex flex-col items-center gap-8 z-10">

                {/* Animated name letters */}
                <div className="flex items-center gap-1">
                    {letters.map((letter, i) => (
                        <motion.span
                            key={i}
                            className="text-5xl sm:text-6xl font-bold text-white"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                ease: "easeOut",
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                    <motion.span
                        className="text-5xl sm:text-6xl font-bold text-[#00ff88]"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: letters.length * 0.1 + 0.1,
                            ease: "backOut",
                        }}
                    >
                        .
                    </motion.span>
                </div>

                {/* Subtitle with typewriter feel */}
                <motion.p
                    className="text-[#00ff88]/70 text-sm sm:text-base tracking-[0.3em] uppercase font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Full Stack Developer
                </motion.p>

                {/* Animated progress line */}
                <div className="relative w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#00ff88] to-[#00ff88]/50 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 1.2,
                            delay: 0.3,
                            ease: "easeInOut",
                        }}
                    />
                    {/* Shimmer effect on the progress bar */}
                    <motion.div
                        className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ left: ["-48px", "192px"] }}
                        transition={{
                            duration: 1,
                            delay: 0.8,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 0.5,
                        }}
                    />
                </div>

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-[#00ff88]/60 rounded-full"
                        style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${10 + Math.random() * 80}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0, 0.8, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 1.5,
                            delay: i * 0.3,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    />
                ))}
            </div>

            {/* Corner accents */}
            <motion.div
                className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-[#00ff88]/30"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div
                className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-[#00ff88]/30"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            />
            <motion.div
                className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-[#00ff88]/30"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.div
                className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-[#00ff88]/30"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            />
        </div>
    );
}
