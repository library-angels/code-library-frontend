import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import Router from './router';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'REQUEST_DESIGNATIONS' });
    }, []);

    return (
        <ThemeProvider>
            <CSSReset />
            <Router />
        </ThemeProvider>
    );
}

export default App;
