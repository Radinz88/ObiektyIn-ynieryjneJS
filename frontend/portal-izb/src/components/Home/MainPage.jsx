import React from "react";
import './MainPage.css'

//Import obrazów dla komponentów
import mapa from "../../assets/images/mapa1.png"
import obiekty from "../../assets/images/objects.jpg"
import AK from "../../assets/images/atlasKolejowy.png";
import PLK from "../../assets/images/pkpPLK.png";
import RI from "../../assets/images/rynekInfrastruktury.png";
import RK from "../../assets/images/rynekKolejowy.png";
import WNP from "../../assets/images/wnpPL.png";

//Komponent reprezentujący mapę schematyczną linii kolejowych wraz z ich zestawieniem
function Map(){
    return(
        <div id="mapSection" class='map'>
            <br/>
            <div id="mapHeader" class='map'>
                <strong class='map'>Linie kolejowe</strong>
                <br/>
                <span class='map'>WOJ. KUJAWSKO-POMORSKIE</span>
            </div>
            <img class='map' src={mapa} alt="mapa"/>
            <ul class='map'>
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
    )
}

//Komponent zawierający główną treść tekstową strony głównej
function MainText() {
    return(
        <article id="mainText">
            <strong class="super">Po zalogowaniu w portalu znajdziesz m.in.:</strong> 
            <ul id="portalFunctions">
                <li>listę wszystkich obiektów inżynieryjnych znajdująch się w Zakładzie Linii Kolejowych w Bydgoszczy,</li>
                <li>opisy stanu technicznego obiektów,</li>
                <li>analizy statystyczne,</li>
                <li>informacje o paramterach technicznych tychże obiektów,</li> 
                <li>informacje o planowanych inwestycjach i remontach,</li>
                <li>
                    aktualne protokoły z kontroli stanu technicznego obiektów inżynieryjnych, a za pomocą kreatora będziesz mógł 
                    również dodać, zaktualizować lub utworzyć nowe protokoły zgodne z Id-16 (tylko dla osób z nadanymi specjalnymi
                    uprawnieniami),
                </li>
                <li>oraz wiele innych opracowań i analiz, które będą udostępniane wraz z rozbudową portalu.</li>
            </ul>
            <p>
                Podsumowując dowiesz się wszystkiego na temat obiektów inżynieryjnych znajdujących się w zarządzie IZ Bydgoszcz.
                Portal stanowi bazę wiedzy opartą na aktualnych sprawozdaniach i raportach technicznych oraz informacji z baz danych 
                przekazanych przez Użytkownika. <br/>
                Stanowi wsparcie na Projektantów, Wykonawców, Inspektorów, Diagnostów oraz Kadry Zarządzającej.
            </p>
            <div id="objectsIMG">
                <img src={obiekty} alt="obiektyKolejowe"/>
            </div>
        </article>
    )
}

//Komponent zawierający tekst uzupełniający/ciekawostę w tematykę strony internetowej
function Outro() {
    return(
        <article id="outro">
            <strong class="super">Czy wiesz, że ...</strong>
            <p>
                W zarządzie Zakładu Linii Kolejowych w Bydgoszczy znajduje się ok. 1550 obiektów inżynieryjnych. Położone 
                są głównie na terenie województwa kujawsko pomorskiego, ale część z tych obiektów znajduje się również 
                w obrębie województw: mazowieckiego, wielkopolskiego i pomorskiego.
            </p>
            <p>
                Średni wiek typowego obiektu mostowego znacząco przekracza 70 lat, dlatego ich stan techniczny jest na 
                bieżąco monitorowany. Co roku powstaje setki opracowań na ten temat, a najtrudniejsze przypadki
                są opisywane szczegółowo w tzw. 'przeglądach specjalnych'.
            </p>
            <p>
                W skład tych 1550 kolejowych obiektów inżynieryjnych wchodzi 145 mostów, 134 wiadukty, 12 przejść pod torami w tym
                część z nich o konstrukcji tunelowej, a także ponad 1200 innego rodzaju obiektów jak przepusty, ściany 
                oporowe i kładki dla pieszych.
            </p>
        </article>
    )
}

//Komponent zawierający widget Tweeter-a
function TweetWidget() {
    <article id="twitter">
        <a class="twitter-timeline" href="https://twitter.com/PKP_PLK_SA?ref_src=twsrc%5Etfw" data-height="500">
            Napiszcie do Nas na @MostyIZB!
        </a> 
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </article>

}

//Komponent zawierający odnośniki do polecanych stron internetowych
function WWWRecomendations(){
    return(
        <article id="wwwRecommendations">
                <dt id="h3">Polecane strony internetowe:</dt><br/>
                <a href="https://www.atlaskolejowy.net/">      
                    <img class="inGrid" src={AK} alt="atlaskolejowy.net" width="200"/>
                </a>
                <a href="plk-sa.pl/">      
                    <img class="inGrid" src={PLK} alt="plk-sa.pl" width="200"/>
                </a>
                <a href="https://www.rynekinfrastruktury.pl">           
                    <img class="inGrid" src={RI} alt="wnp.pl" width="200"/>
                </a>
                <a href="https://www.rynek-kolejowy.pl/">           
                    <img class="inGrid" src={RK} alt="rynek-kolejowy.pl" width="200"/>
                </a>
                <a href="https://www.wnp.pl">      
                    <img class="inGrid" src={WNP} alt="wnp.pl" width="200"/>
                </a>
            </article>
    )
}

//Komponent zawierający notkę o dostępie tylko dla zalogowanych uzytkowników
function Disclaimer() {
    return(
        <footer id="disclaimer">
            Wszystkie funkcjonalności portalu dostępne są tylko dla zalogowanych użytkowników.
        </footer>
    )
}

//Komponent dla głównej treści strony internetowej
function MainPage(){
    return(
        <div id="mainPage">
            <Map />
            <MainText />
            <Outro/>
            <TweetWidget />
            <WWWRecomendations />
            <Disclaimer />
        </div>  
    )
}

export default MainPage;