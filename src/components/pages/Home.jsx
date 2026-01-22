import React from "react";
import Magnet from '../reactbits/Magnet.jsx'
import { motion } from "motion/react";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import { FaArrowDown } from "react-icons/fa6";
import Contact from "./Contact.jsx";

const glow = "#00ff88";

const Home = () => {
    return (
        <>
            {/* Home page */}
            <section className="relative w-full h-[900px] sm:h-[900px] lg:h-screen overflow-hidden" id="home">

                {/* 🔵 ANIMATED GLOW CIRCLE */}
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

                {/* Optional second glow for depth */}


                {/* CONTENT */}
                <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-24 z-10">
                    <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-14">

                        {/* LEFT CONTENT */}
                        <div className="text-center md:text-left text-white lg:space-y-10">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                Hi, I'm Ayush
                            </h1>

                            <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl font-medium text-[#00ff88]">
                                MERN Stack Developer | Frontend-Focused Full-Stack Engineer
                            </h2>

                            <p className="mt-6 text-base sm:text-lg text-white/80 max-w-xl mx-auto md:mx-0">
                                I build fast, scalable, and responsive web applications using
                                <span className="font-semibold text-[#00ff88]">
                                    {" "}React, Node.js, Express, and MongoDB.
                                </span>
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="px-8 py-3 rounded-full font-semibold text-black bg-[#00ff88] hover:bg-[#00e67a] shadow-lg shadow-[#00ff88]/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                                    <span>Download Resume</span>
                                    <FaArrowDown />
                                </a>

                                <a href="#contact" className="px-8 py-3 rounded-full font-semibold border-2 border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition-all duration-300 hover:-translate-y-1">
                                    Let’s Chat
                                </a>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center md:justify-end">
                            <div className="relative w-[420px] h-[440px] flex items-center justify-center">
                                {/* Magnet wrapper for both box + image */}
                                <Magnet
                                    padding={120}
                                    disabled={false}
                                    magnetStrength={8}
                                    smoothness={0.12}
                                    wrapperClassName="inline-block"
                                    innerClassName="transition-transform duration-300 ease-out"
                                >
                                    <div className="relative w-[300px] h-[320px] lg:w-[400px] lg:h-[420px]">

                                        {/* Rotating box behind */}
                                        <div
                                            className="absolute inset-0 border-2 border-[#00ff88] rounded-2xl z-0"
                                            style={{ animation: "rotate360 10s linear infinite" }}
                                        />

                                        {/* Image on top */}
                                        <img
                                            src="/Images/Profil.jpg"
                                            alt="Ayush Gandhi"
                                            className="w-full h-full object-cover rounded-lg shadow-lg relative z-10"
                                        />

                                    </div>
                                </Magnet>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* About Page */}
            <section id="about">
                <About />
            </section>

            {/* Skills Page */}
            <section id="work">
                <Skills />
            </section>

            {/* Projects */}
            <section id="projects">
                <Projects />
            </section>

            {/* Projects */}
            <section id="contact">
                <Contact />
            </section>

        </>
    );
};

export default Home;
