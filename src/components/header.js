import React from 'react';
import './Header.css'; 
import logo from '../assets/logo.png'; 

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Reprompt Logo" className="logo" />
        <div className="brand-name">Probzlocation</div>
      </div>
      <nav>
        <button className="nav-btn">Book a Call</button>
      </nav>
    </header>
  );
}

export default Header;
