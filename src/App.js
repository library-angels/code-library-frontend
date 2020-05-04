import React, { useEffect } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import { useBooksDispatch } from './hooks/books';
import Router from './router';

function App() {
    const { loadBooks, loadDesignations } = useBooksDispatch();

    useEffect(() => {
        loadBooks();
        loadDesignations();
    }, []);

    return (
        <ThemeProvider>
            <CSSReset />
            <Router />
        </ThemeProvider>
    );
}

export default App;
