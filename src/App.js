import React, { useEffect } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import Router from './router';

import { useBooksDispatch } from './hooks/books';

function App() {
    const { loadDesignations } = useBooksDispatch();

    useEffect(() => {
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
