import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThemeProvider, CSSReset, Link } from '@chakra-ui/core';

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
