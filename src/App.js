import React, { Component } from 'react';
import Home from './containers/Home';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

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
        <div className="Test">
          <Form />
        </div>
        <div className="App-header">
          <h2>Welcome to VOTENTEER</h2>
          <div id="bookingjs"></div>
        </div>
      </div>
    );
  }
}

export default App;
