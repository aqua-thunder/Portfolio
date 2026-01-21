import React from 'react'
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/pages/Home.jsx'
import Contact from './components/pages/Contact.jsx'
import Cursor from './components/common/Cursor.jsx'
import About from './components/pages/About.jsx'
import Skills from './components/pages/Skills.jsx'
import Projects from './components/pages/Projects'
import Navbar from './components/common/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cursor />
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
