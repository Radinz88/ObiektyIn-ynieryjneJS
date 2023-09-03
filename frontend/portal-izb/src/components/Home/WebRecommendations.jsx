import React from "react";

//Import obrazów dla komponentów
import AK from "../../assets/images/atlasKolejowy.png";
import PLK from "../../assets/images/pkpPLK.png";
import RI from "../../assets/images/rynekInfrastruktury.png";
import RK from "../../assets/images/rynekKolejowy.png";
import WNP from "../../assets/images/wnpPL.png";

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

export default WWWRecomendations;