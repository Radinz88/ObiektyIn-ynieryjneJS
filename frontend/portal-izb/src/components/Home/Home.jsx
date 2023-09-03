import React from "react";
import './Home.css'

//Import komponentów składowych
import Map from './Map';
import MainText from './MainText';
import Outro from './Outro';
import TweetWidget from "./TweetWidget";
import WWWRecomendations from "./WebRecommendations";
import Disclaimer from "./Disclaimer";

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