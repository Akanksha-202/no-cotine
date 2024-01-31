import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { firestore } from "../../firebase/utils";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";


const Navbar = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // If the user is authenticated, update Firestore with user data
        if (isAuthenticated && user) {
            const { email, picture, name } = user;
            const usersCollection = collection(firestore, 'users');
    
            // Check if the user document already exists by querying with the user's email
            const emailQuery = query(usersCollection, where('email', '==', email));
    
            getDocs(emailQuery)
                .then((querySnapshot) => {
                    if (querySnapshot.empty) {
                        // Email doesn't exist, add a new document
                        addDoc(usersCollection, {
                            email,
                            picture,
                            name
                        });
                    }
                })
                .catch((error) => {
                    // Handle any errors during the query or document addition
                    console.error('Error checking user existence or adding document:', error);
                });
        }
    }, [isAuthenticated, user]);


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
                                    <button className='ButtonDropdown flex' onClick={toggleDropdown}>
                                        <img 
                                            src={user.picture} 
                                            alt={user.name}
                                            className='h-8 w-8 rounded-full' 
                                        />
                                        <FontAwesomeIcon icon={faCaretDown} style={{ color: '#000' }} className="p-1"/>
                                    </button>
                                    {isOpen && (
                                        <div className='Dropdowncontent'>
                                            <a href="/dashboard">User Profile</a>
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