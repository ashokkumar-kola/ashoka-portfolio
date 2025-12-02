import React from 'react'
import './home.css'
import Socials from './Socials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
import Me from '../../assets/avatar-3.svg'

const Home = () => {
  return (
    <section className='home container'>
      <div className='intro'>
        <img src={Me} alt="My Profile Img" className='intro-image' />
        <h1 className="intro-name">Kola. Ashok Kumar</h1>
        <span className="intro-subtitle">I'm a Full Stack Developer</span>

        <Socials />

        <a href="#contact" className='btn'>Hire Me</a>

        <ScrollDown />

        <Shapes />
      </div>
    </section>
  )
}

export default Home