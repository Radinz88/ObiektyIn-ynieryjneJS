import React, { useState, useEffect } from 'react';
import './MainImage.css';
import mostM4 from '../../assets/images/mostMalinowskiego4.png';
import mostM5 from '../../assets/images/mostMalinowskiego5.png';

function MainImage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //Hook do zamiany obrazu na mniejszy przy rozdzielczościach mobilnych
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    // Wybieramy odpowiednią ścieżkę do obrazu na podstawie szerokości okna
    const imageSrc = windowWidth < 590 ? mostM5 : mostM4;

    return(
        <img id="bridgeIMG" src={imageSrc} alt="LK353MostMalinowskiego"/>
    )
}

export default MainImage;