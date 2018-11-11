import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import History from './components/History';
import Journal from './components/Journal';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <History />
          <Journal />
        </main>
      </div>
    );
  }
}

export default App;
