import React, { useEffect } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import useBooks from './hooks/books';
import Router from './router';

function App() {
    const { load } = useBooks();

    useEffect(() => {
        load();
    }, []);

    return (
        <ThemeProvider>
            <CSSReset />
            <Router />
        </ThemeProvider>
    );
}

export default App;
