import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search';

import useBooks from '../../hooks/books';

import './styles.scss';

export const CategoryView = ({ books = [] }) => (
    <div id="categories-view">
        {books.length <= 0 ? (
            <div>Loading books</div>
        ) : (
            books.map(({ author, title1: title, cover }) => (
                <div className="category-book">
                    <div className="category-book-img-container">
                        <img
                            src={`https://library.code.berlin${cover}`}
                            alt={title}
                        />
                    </div>
                    <div className="category-book-info-container">
                        <div className="title">
                            <span>{title}</span>
                        </div>
                        <div className="author">
                            <span>{author}</span>
                        </div>
                    </div>
                </div>
            ))
        )}
    </div>
);

CategoryView.propTypes = {
    books: PropTypes.arrayOf({
        author: PropTypes.string,
        title1: PropTypes.string,
        cover: PropTypes.string,
    }),
};

CategoryView.defaultProps = {
    books: [
        {
            author: '',
            title1: '',
            cover: '',
        },
    ],
};

function Category() {
    const { department } = useParams();
    const {
        get: { category },
    } = useBooks(department);

    return (
        <div id="categories-container">
            <Search />
            <CategoryView books={category} />
        </div>
    );
}

export default Category;
