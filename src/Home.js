import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import './App.css';

class Presentation extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Sinopia -- Code4Lib 2019</h2>
            <p>
              19-22 February 2019<br />
              San Jose, California
            </p>
        </header>
        <div className="App-body">
        <h1 className="App-title">Sinopia Preconference</h1>
          <p>
            Jeremy Nelson &amp; Astrid Usong
            <br />Stanford University Libraries
          </p>
          <h3 className="App-title">Schedule</h3>
          <ul className="App-topics">
            <li><Link to="/introduction">Sinopia Introduction</Link></li>
            <li><Link to="/building-resource-template">Building a Resource Template</Link></li>
            <li><Link to="/user-interface#part-one">User Interface Part. One</Link></li>
          </ul>
          <h4 className="App-title">Lunch</h4>
          <ul className="App-topics">
            <li><Link to="/user-interface#part-two">User Interface Part. Two</Link></li>
            <li><Link to="/installing-sinopia">Installing Sinopia Locally</Link></li>
            <li><Link to="/next-steps">Next steps</Link></li>
          </ul>
          <Link
            to="/introduction">
            Sinopia Introduction
            <FontAwesomeIcon icon="caret-square-right" />
          </Link>
        </div>
        <hr />
        <div className="App-body">
          <h2 className="App-title">
            <Link to="/cataloging-interface">
            Cataloging Interface for Linked Data
            </Link>
          </h2>
          <p>Naomi Dushay &amp; Jeremy Nelson<br />Stanford University Libraries</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Presentation;
