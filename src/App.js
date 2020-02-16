import React from 'react';
import Counter from './components/Counter';
import AsyncCounter from './components/AsyncCounter';

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
