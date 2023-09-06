import React from 'react';
import mapa from "../../assets/images/mapa1.png"

//Komponent reprezentujący mapę schematyczną linii kolejowych wraz z ich zestawieniem
function MapComponent(){
    return(
        <div className="mapComponent">
            <div id="mapSection" className='map'>
                <div id="mapHeader" className='map'>
                    <strong className='map'>Linie kolejowe</strong>
                    <br/>
                    <span className='map'>WOJ. KUJAWSKO-POMORSKIE</span>
                </div>
                <img className='map' src={mapa} alt="mapa"/>
                <ul className='map'>
                    <li>Lk18 Kutno - Piła</li>
                    <li>Lk27 Nasielsk - Toruń Wschodni</li>
                    <li>Lk33 Kutno - Brodnica</li>
                    <li>Lk131 Chorzów Batory - Tczew</li>
                    <li>Lk201 Nowa Wieś Wielka - Gdynia Port</li>
                    <li>Lk206 Inowrocław Rąbinek - Drawski Młyn</li>
                    <li>Lk207 Toruń Wschodni - Malbork</li>
                    <li>Lk208 Działdowo - Chojnice</li>
                    <li>Lk209 Chełmża - Bydgoszcz Wschód</li>
                    <li>Lk215 Laskowice Pomorskie - Bąk</li>
                    <li>Lk231 Inowrocław Rąbinek - Mogilno</li>
                    <li>Lk240 Świecie nad Wisłą - Terespol Pomorski</li>
                    <li>Lk241 Tuchola - Koronowo</li>
                    <li>Lk245 Aleksandrów Kuj. - Ciechocinek</li>
                    <li>Lk246 Toruń Wschodni - Olek</li>
                    <li>Lk281 Oleśnica - Chojnice</li>
                    <li>Lk353 Poznań Wschód - Skandawa</li>
                    <li>Lk356 Poznań Wschód - Bydgoszcz Główna</li>
                    <li>Lk544 Zamków - Borysławice</li>
                    <li>Lk741 Mimowola - Jaksice</li>
                    <li>Lk742 Inowrocław - Inowrocław Rąbinek</li>
                    <li>Lk743 Lipowa Tucholska - Szlachta</li>
                    <li>Lk809 Barłogi - Borysławice</li>
                </ul>
                <br/>
            </div>
        </div>
        
    )
}

export default MapComponent;