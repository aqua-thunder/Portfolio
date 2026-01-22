import React from 'react'
import { useState,useEffect } from 'react'
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


  const [count, setCount] = useState(0)

  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade
      setTimeout(() => setLoading(false), 700); // remove after fade
    }, 1200);

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

    </>
  )
}

export default App
