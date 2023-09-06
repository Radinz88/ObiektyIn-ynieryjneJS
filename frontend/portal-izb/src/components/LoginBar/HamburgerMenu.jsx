import React from "react";
import { Link } from "react-router-dom";

function HamburgerMenu() {
  return (
    <nav className="hamburger-menu">
      <button className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>

      <ul className="menu-items">
        <li><Link>Zaloguj się</Link></li>
        <li><Link>Zarejestuj się</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link>Aktualności</Link></li>
        <li><Link>Forum</Link></li>
        <li><Link>Literatura</Link></li>
        <li><Link>Sklep</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>
      
    </nav>
  );
}

export default HamburgerMenu;