import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {
    const { loginWithRedirect } = useAuth0();
    return (
        <header className="l-header" id="header">
            <nav className="nav bd-container">
                <a href="/" className="nav__logo">
                    Nocotine 🚭
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
                            <button style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", fontSize: '1rem' }} onClick={() => loginWithRedirect()} className="nav__link">
                                Login
                            </button>
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
        </header>
    )
}

export default Navbar