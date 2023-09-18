// frontend\portal-izb\src\components\News\ArticleTitle.jsx
import React from 'react';
import './ArticleTitle.css';

const Title = "Tytuł 1";
const Author = "Autor arykułu";
const publicationDate = "xxx-xx-xx godz. yy:yy";

function ArticleTitle() {
    return(
        <section className='article-title'>
            <h1 className='article-title-h1'>{Title}</h1>
            <span className='article-title-span'>{Author} </span>
            <span className='article-title-span'>Dodano: {publicationDate} </span>
        </section>
    ) 
}

export default ArticleTitle;