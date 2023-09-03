import React from 'react';
import './MenuBar.css';

function MenuBar(){
    return(
        <section id="menuBar">
            <button class="menuBar">HOME</button>
            <button class="menuBar">AKTUALNOŚCI</button>
            <button class="menuBar">FORUM</button>
            <button class="menuBar">LITERATURA</button>
            <button class="menuBar">SKLEP</button>
            <button class="menuBar">KONTAKT</button>
        </section>
    )
}

export default MenuBar;