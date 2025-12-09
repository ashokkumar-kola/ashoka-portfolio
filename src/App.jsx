import React from 'react'
import './App.css'

import Home from './components/home/Home.jsx'
import Hero from './components/hero/Hero.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'
import About from './components/about/About.jsx'
import Resume from './components/resume/Resume.jsx'
import Education from './components/education/Education.jsx'
import Skills from './components/skills/Skills.jsx'
import Projects from './components/projects/Projects.jsx'
import Experience from './components/experience/Experience.jsx'
import Certifications from './components/certifications/Certifications.jsx'
import Achievements from './components/achievements/Achievements.jsx'
import Blogs from './components/blogs/Blogs.jsx'
import Testimonials from './components/testimonials/Testimonials.jsx'
import Contact from './components/contact/Contact.jsx'

function App() {

  return (
    <>
      <Sidebar />
      <main className='main'>
        {/* <Home /> */}
        {/* <About />
        <Resume />
        <Education /> */}
        <Skills />
        {/* <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Blogs />
        <Testimonials />
        <Contact /> */}
      </main>
    </>
  )
}

export default App
