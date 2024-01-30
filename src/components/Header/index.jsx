import React from 'react';
import './styles.css';
import Navbar from '../Navbar/Navbar';

const Header = () => (
  <header className='home-header'>
    <nav className="nav bd-container">
      <a href="/" className="nav__logo">
      Nocotine 🚭;
      </a>
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
        <li className="nav__item">
            <a href="#about" className="nav__link ">
              About
            </a>
          </li>
          {/* 
          <li className="nav__item">
            <a href="#theme" className="nav__link ">
              Theme
            </a>
          </li>
          <li className="nav__item">
            <a href="#events" className="nav__link">
              Events
            </a>
          </li> */}
          {/* <li class="nav__item"><a href="#timeline" class="nav__link">Timeline</a></li> */}
          <li className="nav__item">
            <a href="#features" className="nav__link">
             Features
            </a>
          </li>
          <li className="nav__item">
            <a href="#team" className="nav__link" >
              Team
            </a>
          </li>
          <li className="nav__item">
            <a href="/accounts" className="nav__link">
              Login
            </a>
          </li>
          <li>
            <i className="bx bx-toggle-left change-theme" id="theme-button" />
          </li>
        </ul>
      </div>
      <div className="nav__toggle" id="nav-toggle">
        <i className="bx bx-grid-alt" />
      </div>
    </nav>

  <header className='home-header mt-16'>
    <Navbar />
    <h1>
     Reading Area
    </h1>
    <p>
     Explore a curated compilation of resources dedicated to the journey of quitting smoking <br></br>and discover strategies for maintaining your physical and mental well-being. <br></br>Embark on a path towards a smoke-free life, embracing health and authenticity. Quit smoking, stay well, be you!
    </p>
  </header>
);

export default Header;