// frontend\portal-izb\src\components\News\ArticleWindow.jsx
import React from 'react';
import './ArticleWindow.css';

function ArticleWindow({ titleComponent, mainPictureComponent, snippetComponent }) {
    return (
        <div className='article-window'>
            {titleComponent}
            {mainPictureComponent}
            {snippetComponent}
        </div>
    )
}

export default ArticleWindow;