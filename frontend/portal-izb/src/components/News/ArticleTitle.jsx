// frontend\portal-izb\src\components\News\ArticleTitle.jsx
import React from 'react';
import './ArticleTitle.css';

const Title = "Tytuł Artykułu nr 1";
const Author = "Jan Kowalski";
const publicationDate = "xxx-xx-xx godz. yy:yy";
const articleId = "rsz-1";

function ArticleTitle() {
    return(
        <section className='article-title'>
            <h1 className='article-title-h1'>{Title}</h1>
            <span className='article-title-span'>Autor artykułu: {Author}</span>
            <span className='article-title-span'>Dodano: {publicationDate} (id: {articleId}) </span>
        </section>
    ) 
}

export default ArticleTitle;