import React from 'react';
import {Link} from 'react-router-dom';
import './MenuBar.css';

function MenuBar(){
    return(
        <section id="menuBar">
            <nav>
                <Link className="menuBar" to="/home">HOME</Link>
                <Link className="menuBar">AKTUALNOŚCI</Link>
                <Link className="menuBar">FORUM</Link>
                <Link className="menuBar">LITERATURA</Link>
                <Link className="menuBar">SKLEP</Link>
                <Link className="menuBar" to="/contact">KONTAKT</Link>
            </nav>
        </section>
    )
}

export default MenuBar;