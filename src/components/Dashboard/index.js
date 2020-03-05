import React from 'react';
import Search from '../Search';
import BookCarousel from '../BookCarousel';

import library from '../../library.json';

function Dashboard() {
    const categories = library.reduce((acc, book) => {
        const { designation } = book;

        if (acc[designation] === undefined) {
            acc[designation] = [];
        }
        acc[designation].push(book);

        return acc;
    }, {});

    return (
        <div>
            <Search />
            {Object.keys(categories).map(category => (
                <BookCarousel
                    category={category}
                    books={categories[category].slice(0, 10)}
                />
            ))}
        </div>
    );
}

export default Dashboard;
