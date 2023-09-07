import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HamburgerMenu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      // Zamykaj menu, jeśli użytkownik kliknie poza menu
      if (menuVisible && !e.target.closest(".hamburger-menu")) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      // Usuwaj nasłuchiwanie zdarzenia po odmontowaniu komponentu
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [menuVisible]);

  return (
    <nav className={`hamburger-menu ${menuVisible ? 'active' : ''}`}>
      <button className='burger' onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>

      <ul className={`menu-items ${menuVisible ? 'hidden' : ''}`}>
        <li><Link onClick={closeMenu} >Zaloguj się</Link></li>
        <li><Link onClick={closeMenu} >Zarejestuj się</Link></li>
        <li><Link to="/home" onClick={closeMenu} >Home</Link></li>
        <li><Link to="/news" onClick={closeMenu} >Aktualności</Link></li>
        <li><Link to="/forum" onClick={closeMenu} >Forum</Link></li>
        <li><Link to="/literature" onClick={closeMenu} >Literatura</Link></li>
        <li><Link to="/shop" onClick={closeMenu} >Sklep</Link></li>
        <li><Link to="/contact" onClick={closeMenu} >Kontakt</Link></li>
      </ul>
    </nav>
  );
}

export default HamburgerMenu;