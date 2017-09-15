import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
  console.log(sessionStorage.getItem({}));
    return (
        <div className="jumbotron">
            <h1>Hello World!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum vitae massa non maximus. Proin tincidunt, felis tristique rutrum aliquam, eros leo finibus lacus, id ornare diam eros ac arcu. </p>
        
            <button className="btn primary btn-lg center"><Link to="/register">Lets get started</Link></button>
        </div>
    );
  }
}

export default Home;
