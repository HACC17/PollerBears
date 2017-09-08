import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
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
