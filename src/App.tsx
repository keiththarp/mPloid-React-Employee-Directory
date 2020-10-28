import React from 'react';
import './App.css';
import Directory from './views/directory';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <Directory />
    </div>
  );
}

export default App;
