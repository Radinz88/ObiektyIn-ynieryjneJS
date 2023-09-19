import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ArticleWindow from './ArticleWindow';

function NewsPage() {
    const [articlesPerPage, setArticlesPerPage] = useState(10); 
    const [currentPage, setCurrentPage] = useState(0);

    const fetchArticles = () => {
         // Implementacja pobierania artykułów z serwera
    s};

    const indexOfLastArticle = (currentPage + 1) * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    // Pobierz tylko artykuły dla bieżącej strony
    const currentArticles = fetchArticles().slice(indexOfFirstArticle, indexOfLastArticle);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className='news-page'>
            <div className='article-settings'>
                <select onChange={(e) => setArticlesPerPage(Number(e.target.value))}>
                    <option value={5}>5 artykułów na stronie</option>
                    <option value={10}>10 artykułów na stronie</option>
                    <option value={15}>15 artykułów na stronie</option>
                    <option value={30}>30 artykułów na stronie</option>
                </select>
            </div>

            {currentArticles.map((article) => (
                <ArticleWindow key={article.id} article={article} />
            ))}

            <ReactPaginate
                pageCount={Math.ceil(fetchArticles().length / articlesPerPage)}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    );
}

export default NewsPage;