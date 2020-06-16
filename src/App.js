import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Router from './router';

function App() {
    return (
        <ThemeProvider>
            <CSSReset />
            <Router />
        </ThemeProvider>
    );
}

export default App;
