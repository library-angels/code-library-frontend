import React from 'react';

import Search from '../Search';
import BookCarousel from '../BookCarousel';
// import { CategoryView } from '../Category';

import './styles.scss';

import useBooks from '../../hooks/books';

function Dashboard() {
    const {
        get: { dashboard },
    } = useBooks();
    const categories = Object.keys(dashboard);

    return (
        <div id="dashboard-container">
            <Search />
            {categories
                .map(c => dashboard[c].length)
                .reduce((acc, len) => acc + len, 0) <= 0 ? (
                <div> Loading Data </div>
            ) : (
                categories.map(category => (
                    <BookCarousel
                        key={category}
                        category={category}
                        books={dashboard[category]}
                    />
                ))
            )}
            {/* <div id="categories-view-container">
                <CategoryView books={[]} />
            </div> */}
        </div>
    );
}

export default Dashboard;
