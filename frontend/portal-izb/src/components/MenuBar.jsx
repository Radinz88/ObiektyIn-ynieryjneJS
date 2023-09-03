import React from 'react';
import './MenuBar.css';

function MenuBar(){
    return(
        <section id="menuBar">
            <button className="menuBar">HOME</button>
            <button className="menuBar">AKTUALNOŚCI</button>
            <button className="menuBar">FORUM</button>
            <button className="menuBar">LITERATURA</button>
            <button className="menuBar">SKLEP</button>
            <button className="menuBar">KONTAKT</button>
        </section>
    )
}

export default MenuBar;