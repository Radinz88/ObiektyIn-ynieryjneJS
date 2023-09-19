// frontend\portal-izb\src\components\News\ArticleMainPicture.jsx

import React from 'react';
import './ArticleMainPicture.css';

const mainPic = '../../assets/icons/poland-flag-icon.svg'; //do pobrania z backendu z bazy danych sqlite
const picAuthor = 'Jan Kowalski'; //do pobrania z backendu z bazy danych sqlite
const picName = 'wstawione przykładowe zdjęcie 1'; //do pobrania z backendu z bazy danych sqlite
const picDate= 'xxxx-xx-xx'; //do pobrania z backendu z bazy danych sqlite

function ArticleMainPicture() {
    return(
        <div className='article-mainPicture'>
            <img src={mainPic} alt='mainPicture' className='article-mainPicture-picture'/>
            <span className='article-mainPicture-signature'>Fot. {picName}, autor zdjęcia: {picAuthor} ({picDate})</span> 
        </div>
    )
}

export default ArticleMainPicture;