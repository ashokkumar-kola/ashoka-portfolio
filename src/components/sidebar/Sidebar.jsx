import React from 'react'
import './sidebar.css'
import Logo from '../../assets/logo.svg'

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#hero" className="nav-logo">
        <img src={Logo} alt="" />
      </a>

      <nav className="nav">
        <div className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#hero" className="nav-link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="icon-user-following"></i>
              </a>
            </li>

            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className="nav-item">
              <a href="#projects" className="nav-link">
                <i className="icon-graduation"></i>
              </a>
            </li>

            <li className="nav-item">
              <a href="#education" className="nav-link">
                <i className="icon-layers"></i>
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <i className="icon-note"></i>
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='nav-footer'>
        <span className="copyright">&copy; 2025 - 2026.</span>
      </div>
    </aside>
  )
}

export default Sidebar