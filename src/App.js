import React, { Component } from 'react';
import Home from './containers/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="nav">
          <button>Locations</button>
          <button>Contact</button>
          <button>FAQs</button>
        </div>
          <Home />
      </div>
    );
  }
}

export default App;
