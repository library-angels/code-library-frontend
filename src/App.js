import React, { useEffect } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { useGapiDispatch } from './hooks/GAPI';

import { useBooksDetailsDispatch, useBooksDispatch } from './hooks/books';
import Router from './router';

function App() {
    const { loadPublishersAndSeries } = useBooksDetailsDispatch();
    const { loadDesignations } = useBooksDispatch();
    const { loadGapi } = useGapiDispatch();
    useEffect(() => {
        loadGapi();
        loadPublishersAndSeries();
        loadDesignations();
        // eslint-disable-next-line
    }, []);
    return (
        <ThemeProvider>
            <CSSReset />
            <Router />
        </ThemeProvider>
    );
}

export default App;
