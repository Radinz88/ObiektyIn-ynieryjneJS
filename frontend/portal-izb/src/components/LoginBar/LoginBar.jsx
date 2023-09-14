import React from "react";
import logo from "../../assets/images/logo1.png";
import './LoginBar.css';

/*Import komponentów składowych*/
import LoginButton from "./LoginButtonModalPopup";
import Burger from "./HamburgerMenu";
import LanguageSelect from "./LanguageSelect";


// Komponent reprezentujący logo
function Logo() {
  return (
    <img className="box1" src={logo} alt="Logo IZB-Mosty" width="60" />
  );
}

// Komponent tytułu strony w Nagłówku
function Header() {
  return (
    <div className="textBlock">
        <span className="box2">MOSTY IZ BYDGOSZCZ</span>
        <span className="box3">| LOKALNY PORTAL BRANŻOWY</span>
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
      <div className="login-button">
        <LoginButton />
      </div>
      <Burger />
    </div>
  );
}

export default LoginBar;