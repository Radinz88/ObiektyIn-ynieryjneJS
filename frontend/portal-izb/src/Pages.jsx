import React from 'react';

//Import komponentów składowych
import LoginBar from './components/LoginBar/LoginBar';
import MainImage from './components/MainImage';
import MenuBar from './components/NavigationBar/MenuBar';
import Home from './components/Home/Home';
import ContactForm from './components/ContactForm/Contact';

export function HomePage() {
    return(
        <div>
            <LoginBar/> 
            <MainImage/> 
            <MenuBar/> 
            <Home/>
        </div>
    )
}

export function News() {
    return(
        <div>
            <LoginBar/> 
            <br/><br/>
            <MenuBar/> 
            <h2>Strona "Aktualności" w budowie</h2>
        </div>
    )
}

export function Forum() {
    return(
        <div>
            <LoginBar/> 
            <br/><br/>
            <MenuBar/> 
            <h2>Strona "Forum" w budowie</h2>
        </div>
    )
}

export function Literature() {
    return(
        <div>
            <LoginBar/> 
            <br/><br/>
            <MenuBar/> 
            <h2>Strona "Literatura" w budowie</h2>
        </div>
    )
}

export function Shop() {
    return(
        <div>
            <LoginBar/> 
            <br/><br/>
            <MenuBar/> 
            <h2>Strona "Sklep" w budowie</h2>
        </div>
    )
}

export function ContactPage() {
    return(
        <div>
            <LoginBar/> 
            <br/><br/>
            <MenuBar/> 
            <ContactForm/>
        </div>
    )
}
