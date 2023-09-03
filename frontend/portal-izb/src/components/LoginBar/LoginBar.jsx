import React, {useState} from "react";
import logo from "../../assets/images/logo1.png";
import flagPL from "../../assets/icons/poland-flag-icon.svg";
import flagUK from "../../assets/icons/united-kingdom-flag-icon.svg";
import './LoginBar.css';
import LoginButton from "./LoginButtonModalPopup";


// Komponent reprezentujący logo
function Logo() {
  return (
    <img className="box1" src={logo} alt="Logo IZB-Mosty" width="60" />
  );
}

// Komponent reprezentujący nagłówek
function Header() {
  return (
    <div>
        <span className="box2">MOSTY IZ BYDGOSZCZ</span>
        <span className="box3">| LOKALNY PORTAL BRANŻOWY</span>
    </div>
  );
}

// Komponent reprezentujący wybór języka
function LanguageSelect() {
  const [selectedLanguage, setSelectedLanguage] = useState('pl'); // Stan języka

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);

    // !!!
    // Tu trzeba dorobić zmianę tłumaczenia strony z PL na EN i na zad, może wykorzystać wbudowane moduły przeglądarki?
    // !!!

  };

  return (
    <div className="language-select">
      <div className={`flag ${selectedLanguage === 'pl' ? 'active' : ''}`} onClick={() => handleLanguageChange('pl')}>
        <img src={flagPL} alt="PL" />
      </div>
      <div className={`flag ${selectedLanguage === 'en' ? 'active' : ''}`} onClick={() => handleLanguageChange('en')}>
        <img src={flagUK} alt="EN" />
      </div>
    </div>
  );
}

function HamburgerMenu() {
  return (
    <div className="hamburger-menu">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}

// Główny komponent LoginBar, który używa powyższych komponentów
function LoginBar() {
  return (
    <div id="LoginBar">
      <Logo />
      <Header />
      <LanguageSelect />
      <LoginButton />
      <HamburgerMenu />
    </div>
  );
}

export default LoginBar;