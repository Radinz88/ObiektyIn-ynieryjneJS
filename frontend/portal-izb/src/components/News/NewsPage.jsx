import React from 'react';
import './NewsPage.css';


import ArticleWindow from './ArticleWindow';
import ArticleTitle from './ArticleTitle';
import ArticleMainPicture from './ArticleMainPicture';
import ArticleSnippet from './ArticleSnippet';

function NewsPage() {
    return (
        <div className='news-page'>
            <ArticleWindow
                titleComponent={<ArticleTitle />}
                mainPictureComponent={<ArticleMainPicture />}
                snippetComponent={<ArticleSnippet />}
            />
        </div>
    );
}

export default NewsPage;