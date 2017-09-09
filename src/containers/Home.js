import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home container container-table">
        <div className="row intro">
          <h2>Volunteer for 2018 elections</h2>
          <p className="Home-intro">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea sint earum fugit accusantium tempore voluptatum cum neque quae, nemo quos sapiente voluptatem nulla id. Sit praesentium, nemo sint eligendi saepe!
          </p>
        </div>
        <div className="start-button">
          <Link to="/position" className="btn btn-lg center-block">START VOLUNTEERING</Link>
        </div>
      </div>
    );
  }
}

export default Home;
