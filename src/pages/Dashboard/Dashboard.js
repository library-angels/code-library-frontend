import React from 'react';

import Search from '../../components/Search';
import BookCarousel from '../../components/BookCarousel';

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
        </div>
    );
}

export default Dashboard;
