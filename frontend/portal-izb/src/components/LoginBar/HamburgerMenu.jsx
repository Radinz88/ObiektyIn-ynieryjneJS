import React, { useState } from "react";
import { Link } from "react-router-dom";

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className="bars" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      
      {isMenuOpen && (
        <div className="menu-items">
          <Link to="/login">Zaloguj się</Link>
          <Link to="/register">Zarejestruj się</Link>
          <Link to="/">Home</Link>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;