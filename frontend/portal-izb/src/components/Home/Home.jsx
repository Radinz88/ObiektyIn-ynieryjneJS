import React from "react";
import './Home.css'

//Import komponentów składowych
import MapComponent from './Map';
import MainText from './MainText';
import Outro from './Outro';
import TweetWidget from "./TweetWidget";
import WWWRecomendations from "./WebRecommendations";
import Disclaimer from "./Disclaimer";

function MainPage(){
    return(
        <div id="mainPage">
            <MapComponent />
            <MainText />
            <Outro/>
            <TweetWidget />
            <WWWRecomendations />
            <Disclaimer />
        </div>  
    )
}

export default MainPage;