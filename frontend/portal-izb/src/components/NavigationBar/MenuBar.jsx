import React from 'react';
import {Link} from 'react-router-dom';
import './MenuBar.css';

function MenuBar(){
    return(
        <section id="menuBar">
            <nav>
                <Link className="menuBar" to="/home">HOME</Link>
                <Link className="menuBar" to="/news">AKTUALNOŚCI</Link>
                <Link className="menuBar" to="/forum">FORUM</Link>
                <Link className="menuBar" to="/literature">LITERATURA</Link>
                <Link className="menuBar" to="/shop">SKLEP</Link>
                <Link className="menuBar" to="/contact">KONTAKT</Link>
            </nav>
        </section>
    )
}

export default MenuBar;