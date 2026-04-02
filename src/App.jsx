import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/pages/Home.jsx'
import Contact from './components/pages/Contact.jsx'
import Cursor from './components/common/Cursor.jsx'
import About from './components/pages/About.jsx'
import Skills from './components/pages/Skills.jsx'
import Projects from './components/pages/Projects'
import Navbar from './components/common/Navbar'
import Loader from './components/common/Loader'

import { IoChatbubbleOutline } from "react-icons/io5";


import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,   // animation duration
      once: false,       // animation only once on scroll
      easing: 'ease-in-out',
    })
  }, [])



  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade
      setTimeout(() => setLoading(false), 700); // remove after fade
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader fadeOut={fadeOut} />}
      <Cursor />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <a href="mailto:gandhiayush291@gmail.com?subject=Portfolio%20Contact&body=Hi%20Ayush,%0D%0A%0D%0AI%20discovered%20your%20portfolio%20and%20would%20be%20happy%20to%20get%20in%20touch%20with%20you.">
        <IoChatbubbleOutline className='bg-[#00ff88] text-5xl p-2 rounded-full fixed lg:right-10 right-5 lg:bottom-10 bottom-28 cursor-pointer hover:bg-[#00e67a] shadow-lg shadow-[#00ff88]/80 transition-all duration-300 hover:-translate-y-1 hover:scale-105 ' />
      </a>
    </>
  )
}

export default App
