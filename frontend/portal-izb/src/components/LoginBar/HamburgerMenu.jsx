import React, { useState } from 'react';
import './BurgerBtn.css';
import { Link } from 'react-router-dom';

function Menu() {
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
        <li><Link to="home" className={`link ${isActive ? 'active' : ''}`}>"Home</Link></li>
        <li><Link to="about" className={`link ${isActive ? 'active' : ''}`}>"About</Link></li>
        <li><Link to="portfolio" className={`link ${isActive ? 'active' : ''}`}>"Portfolio</Link></li>
        <li><Link to="contact" className={`link ${isActive ? 'active' : ''}`}>"Contact</Link></li>
      </ul>
    </div>
  );
}

export default Menu;