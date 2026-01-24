import React from "react";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimatedSection from "../common/AnimatedSection";

const projects = [
    {
        title: "StyleKaart",
        description: "Implemented secure authentication, modular backend architecture.",
        image: "/Images/Project_Images/StyleKaart.png",
        visit: "https://stylekaart.netlify.app/"
    },
    {
        title: "Grabit",
        description: "Developed a social media application in React with.",
        image: "/Images/Project_Images/Grabit.png",
        visit: "https://grabitcom.netlify.app/"
    },
    {
        title: "Tanishq",
        description: "Built a responsive Tanishq-inspired e-commerce web app.",
        image: "/Images/Project_Images/Tanishq.png",
        visit: "https://tanisq.netlify.app/"
    },

];

const Projects = () => {



    return (
        <AnimatedSection className="bg-black text-white py-24 ">
            {/* Heading */}
            <div className="max-w-5xl mx-auto px-6 text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    My Featured <span className="text-[#00ff88]">Projects</span>
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    A few things I’ve built with passion, curiosity, and lots of coffee.
                </p>
            </div>
            <div className="w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((item, index) => {
                    return (
                        <Link to={item.visit} target="_blank" className="space-y-5 last:col-span-full last:justify-self-center group">
                            <img
                                src={item.image}
                                className="mt-5 rounded-lg lg:w-[38vw] w-full md:w-[40vw] lg:h-[33vw] h-[27vh] object-cover object-left-top transform transition-transform duration-700 ease-out group-hover:scale-105"
                                alt={item.title}
                            />
                            <div className="flex items-center justify-between">
                                <div className="text-gray-300 text-xl font-semibold">
                                    {item.description}
                                </div>
                                <div className="text-gray-400 border border-gray-300 px-6 p-4 rounded-full group-hover:bg-gray-200 group-hover:text-black transition-all duration-500 ease-out group-hover:scale-110 group-hover:translate-x-2 ">
                                    <FaArrowRightLong />
                                </div>
                            </div>
                        </Link>
                    );
                })}

            </div>        
         
        </AnimatedSection>
    );
};

export default Projects;