import React from 'react'
import { useState } from 'react';
import { BsPerson } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";

const Navbar = () => {

  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    console.log(element)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      setActive(id);
    }
  };


  const navItemClass = (id) =>
    `relative flex items-center gap-2 
     px-4 py-2 rounded-full cursor-pointer 
     transition-all duration-300
     ${active === id
      ? "bg-[#00ff88] text-black font-semibold scale-100 duration-200 transition-all translate-x-2"
      : "hover:text-white group"
    }`;


  return (
    <div className="bg-[#131514] w-[90vw] lg:w-[40vw] fixed bottom-9 lg:bottom-8 mx-auto rounded-full z-50 border border-gray-600 left-1/2 -translate-x-1/2 ">
      <ul className="flex justify-around items-center px-4 sm:px-8 py-3 sm:py-4 text-gray-400">
        {/* Home */}

        <li onClick={() => scrollToSection("home")} className={navItemClass("home")} >
          <IoHomeOutline className="text-xl" />

          {/* Active text (right side) */}
          {active === "home" && <span className='hidden lg:block'>Home</span>}

          {/* Tooltip when inactive */}
          {active !== "home" && (
            <span className="absolute bottom-10 px-3 py-2 rounded-full bg-black left-1/2 -translate-x-1/2 text-white text-xs font-bold opacity-0 scale-95 translate-y-2  group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0  transition-all duration-300">
              Home
            </span>
          )}
        </li>

        {/* About */}
        <li onClick={() => scrollToSection("about")} className={navItemClass("about")} >
          <BsPerson className="text-xl" />
          {active === "about" && <span className='hidden lg:block'>About</span>}
          {active !== "about" && (
            <span className="absolute bottom-10 px-3 py-2 rounded-full bg-black text-white text-xs font-bold opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none left-1/2 -translate-x-1/2">
              About
            </span>
          )}
        </li>

        {/* Work */}
        <li onClick={() => scrollToSection("work")} className={navItemClass("work")} >
          <MdOutlineWorkHistory className="text-xl" />
          {active === "work" && <span className='hidden lg:block'>Work</span>}
          {active !== "work" && (
            <span className="absolute bottom-10 px-3 py-2 rounded-full bg-black text-white left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
              Work
            </span>
          )}
        </li>

        {/* Projects */}
        <li onClick={() => scrollToSection("projects")} className={navItemClass("projects")} >
          <GrProjects className="text-lg" />
          {active === "projects" && <span className='hidden lg:block'>Projects</span>}
          {active !== "projects" && (
            <span className="absolute bottom-10 px-3 py-2 rounded-full bg-black text-white text-xs font-bold opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none left-1/2 -translate-x-1/2">
              Projects
            </span>
          )}
        </li>

        {/* Contact */}
        <li onClick={() => scrollToSection("contact")} className={navItemClass("contact")} >
          <AiOutlineContacts className="text-2xl" />
          {active === "contact" && <span className='hidden lg:block'>Contact</span>}
          {active !== "contact" && (
            <span className="absolute bottom-10 px-3 py-2 rounded-full bg-black text-white text-xs font-bold opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none left-1/2 -translate-x-1/2">
              Contact
            </span>
          )}
        </li>



      </ul>
    </div>

  )
}

export default Navbar

// 
