import React, { useEffect, useRef, useState } from "react";

const projects = [
    {
        title: "E-Commerce Store",
        description: "A full-stack MERN shopping platform with secure payments.",
        image:
            "https://i.pinimg.com/736x/5f/65/85/5f6585fcade8583556ee548866b3fbda.jpg",
    },
    {
        title: "Admin Dashboard",
        description: "Role-based dashboard for managing machines and drivers.",
        image:
            "https://i.pinimg.com/736x/09/66/35/096635424b3694288673f372828a6b06.jpg",
    },
    {
        title: "Portfolio Website",
        description: "My personal brand built with React and Tailwind CSS.",
        image:
            "https://i.pinimg.com/736x/ae/4b/e6/ae4be6ddd54e46b21abe3853cd8ec1c9.jpg",
    },
    {
        title: "Service Booking App",
        description: "Online appointment and service booking system.",
        image:
            "https://i.pinimg.com/736x/e8/75/8e/e8758eee548e046f39dd077bed8f8975.jpg",
    },
    {
        title: "Startup Landing Page",
        description: "High-converting landing page with modern UI.",
        image:
            "https://i.pinimg.com/1200x/a4/c7/f4/a4c7f45703cccc05b7182b1d0da6f6cc.jpg",
    },
    {

    },
];

const Projects = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const scrollProgress = Math.min(
                Math.max(-rect.top / rect.height, 0),
                1
            );

            const index = Math.min(
                projects.length - 1,
                Math.floor(scrollProgress * projects.length)
            );

            setActiveIndex(index);
        };

        window.addEventListener("scroll", onScroll);
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <section className="bg-black text-white py-24">

            {/* Heading */}
            <div className="max-w-5xl mx-auto px-6 text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    My Featured Projects
                </h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    A few things I’ve built with passion, curiosity, and lots of coffee.
                </p>
            </div>

            {/* Stack container */}
            <div
                ref={containerRef}
                className="relative h-[360vh] max-w-4xl mx-auto"
            >
                <div className="sticky top-24 h-[80vh] flex items-center justify-center">
                    <div className="relative w-full h-full">

                        {projects.map((project, i) => {
                            const isActive = i <= activeIndex;

                            return (
                                <div
                                    key={i}
                                    className={`absolute inset-0 transition-all duration-700 ease-out
                    ${isActive
                                            ? "opacity-100 translate-y-0 scale-100 z-20"
                                            : "opacity-0 translate-y-20 scale-95 z-0"
                                        }`}
                                    style={{ zIndex: i + 10 }}
                                >
                                    {/* Image */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-3xl shadow-2xl"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl" />

                                    {/* Text */}
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <h3 className="text-2xl md:text-3xl font-semibold">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 mt-2 max-w-lg">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Projects;
