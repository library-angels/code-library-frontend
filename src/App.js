import React from 'react';

import Counter, { AsyncCounter } from './components/Counter';

function App() {
    return (
        <div className="App">
            <h1>Hello Library</h1>
            <Counter />
            <AsyncCounter />
        </div>
    );
}

export default App;
