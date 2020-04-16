import React, { useEffect } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import { useBooksDispatch } from './hooks/books';
import Router from './router';

function App() {
    const { loadBooks } = useBooksDispatch();

    useEffect(() => {
        loadBooks();
    }, []);

    return (
        <ThemeProvider>
            <CSSReset />
            <Router />
        </ThemeProvider>
    );
}

export default App;
