import React, { useEffect } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { useGapiDispatch } from './hooks/GAPI';
import Router from './router';

function App() {
    const { loadGapi } = useGapiDispatch();
    useEffect(() => {
        loadGapi();
    }, []);
    return (
        <ThemeProvider>
            <CSSReset />
            <Router />
        </ThemeProvider>
    );
}

export default App;
