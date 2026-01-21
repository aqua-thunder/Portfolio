import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const projects = [
    {
        title: "StyleKaart",
        description: "Implemented secure authentication, modular backend architecture.",
        image: "../../../public/Images/Project_Images/StyleKaart.png",
    },
    {
        title: "Grabit",
        description: "Developed a social media application in React with.",
        image: "../../../public/Images/Project_Images/Grabit.png",
    },
    {
        title: "Tanishq",
        description: "Built a responsive Tanishq-inspired e-commerce web app.",
        image: "../../../public/Images/Project_Images/Tanishq.png",
    },

];

const Projects = () => {

    return (
        <section className="bg-black text-white py-24 h-screen">
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
                        <div className="space-y-5 last:col-span-full last:justify-self-center group">
                            <img
                                src={item.image}
                                className="mt-5 rounded-lg lg:w-[40vw] w-full md:w-[40vw] h-[33vw] object-cover object-left-top transform transition-transform duration-700 ease-out
                       group-hover:scale-105"
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

                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
