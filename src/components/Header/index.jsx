import React from 'react';
import './styles.css';
import Navbar from '../Navbar/Navbar';

const Header = () => (
  <header className='home-header mt-16'>
    <Navbar />
    <h1>
     Reading Area
    </h1>
    <p>
    View a collection of resources related to sexual health <br></br>and how you can stay safe physically and mentally. <br></br>Spread love, be healthy, be you!
    </p>
  </header>
);

export default Header;