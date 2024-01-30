import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

    
    return (
        <header className="l-header" id="header">
            <nav className="nav bd-container">
                <a href="/" className="nav__logo">
                    Nocotine 🚭
                </a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="/#about" className="nav__link ">
                                About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="/journal" className="nav__link ">
                                Journal
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
                            <a href="/#features" className="nav__link">
                                Features
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/#team" className="nav__link" >
                                Team
                            </a>
                        </li>
                        {isAuthenticated ? (
                            <li className="nav__item">
                                <div className='Dropdown'>
                                    <FontAwesomeIcon icon={faUser} style={{ color: '#000' }} />
                                    <button className='ButtonDropdown' onClick={toggleDropdown}>
                                        Account
                                        <FontAwesomeIcon icon={faCaretDown} style={{ color: '#000' }} />
                                    </button>
                                    {isOpen && (
                                        <div className='Dropdowncontent'>
                                            <a href="/profile">User Profile</a>
                                            <button
                                                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                                style={{ fontSize: '16px', fontWeight: '600' }}
                                            >
                                                Log Out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ) : (
                            <li className="nav__item">
                                <button style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", fontSize: '1rem' }} onClick={() => loginWithRedirect()} className="nav__link">
                                Login
                            </button>
                            </li>
                        )}

                        {/* <li className="nav__item">
                            <button style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", fontSize: '1rem' }} onClick={() => loginWithRedirect()} className="nav__link">
                                Login
                            </button>
                        </li> */}
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