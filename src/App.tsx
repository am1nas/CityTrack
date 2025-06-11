import React from 'react';
import './App.css';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CityTrack</h1>
        <p>Praćenje gradskih autobusa u realnom vremenu</p>
      </header>
      <main>
        <Registration />
      </main>
    </div>
  );
}

export default App;