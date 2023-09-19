// frontend\portal-izb\src\components\News\ArticleSnippet.jsx

import React from 'react';
import './ArticleSnippet.css';

const fullArticleText= "Tekst przykładowy ".repeat(200); //docelowo do pobierania z serwera, na razie jako placeholder

const snippet = fullArticleText.substring(0,200);

const articleTextId = '2023-09-18-rsz-1'; //docelowo skrypt do pobierania danych z serwera, na razie jako placeholder

function ArticleSnippet() {
    return(
        <div className='article-snippet'>
            <p>{snippet}...</p>
            <a href={articleTextId}>CZYTAJ DALEJ</a>
        </div>
    )
}

export default ArticleSnippet;