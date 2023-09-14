import React, { useState } from 'react';
import './BurgerBtn.css';
import { Link } from 'react-router-dom';

function Burger() {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button className={`burger ${isActive ? 'active' : ''}`} onClick={handleButtonClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <ul className={`menu ${isActive ? 'active' : ''}`}>
        <li><Link to="/home">Strona Główna</Link></li>
        <li><Link to="/news">Aktualności</Link></li>
        <li><Link to="/forum">Forum</Link></li>
        <li><Link to="/literature">Literatura</Link></li>
        <li><Link to="/shop">Sklep</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>
    </div>
  );
}

export default Burger;