import React from "react";
import logo from "../../assets/images/logo1.png";
import flagPL from "../../assets/icons/poland-flag-icon.svg"
import flagUK from "../../assets/icons/united-kingdom-flag-icon.svg"
import logIcon from "../../assets/icons/circle-user-regular.svg"


// Komponent reprezentujący logo
function Logo() {
  return (
    <img className="box box1" src={logo} alt="Logo IZB-Mosty" width="60" />
  );
}

// Komponent reprezentujący nagłówek
function Header() {
  return (
    <div>
        <header className="box box2">MOSTY IZ BYDGOSZCZ</header>
        <aside id="header" className="box box3">| LOKALNY PORTAL BRANŻOWY</aside>
    </div>
  );
}

// Komponent reprezentujący wybór języka
function LanguageSelect() {
  return (
    <select id="lang">
      <option value="pl" data-icon={flagPL} alt="PL"></option>
      <option value="en" data-icon={flagUK} alt="EN"></option>
    </select>
  );
}

// Komponent reprezentujący przycisk logowania
function LoginButton() {
  return (
    <button className="box box4">
      <img id="login" src={logIcon} alt="Ikona użytkownika" width="20" />
      <span id="login">Zaloguj</span>
    </button>
  );
}

// Główny komponent LoginBar, który używa powyższych komponentów
function LoginBar() {
  return (
    <div>
      <Logo />
      <Header />
      <LanguageSelect />
      <LoginButton />
    </div>
  );
}

export default LoginBar;