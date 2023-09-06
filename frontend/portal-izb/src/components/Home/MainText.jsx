import React from "react";
import obiekty from "../../assets/images/objects.jpg"


//Komponent zawierający główną treść tekstową strony głównej
function MainText() {
    return(
        <article id="mainText">
            <strong className="super">Po zalogowaniu w portalu znajdziesz m.in.:</strong> 
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

export default MainText;