import React, { useState, useEffect } from 'react';
import flagPL from "../../assets/icons/poland-flag-icon.svg";
import flagUK from "../../assets/icons/united-kingdom-flag-icon.svg";


function LanguageSelect() {
    const [selectedLanguage, setSelectedLanguage] = useState('pl'); 
  
    const handleLanguageChange = (language) => {
      setSelectedLanguage(language);
    };
    
    //Zmiana preferowanego języka przeglądarki internetowej
    useEffect(() => {
      const preferredLanguage = navigator.language.substring(0, 2);
      setSelectedLanguage(preferredLanguage);
    }, []);
  
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
  
  export default LanguageSelect;