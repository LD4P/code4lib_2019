import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          </p>
          <h3 className="App-title">Schedule</h3>
          <ul className="App-topics">
            <li><a href="/introduction">Sinopia Introduction</a></li>
            <li><a href="/building-resource-template">Building a Resource Template</a></li>
            <li><a href="/user-interface#part-one">User Interface Part. One</a></li>
          </ul>
          <h4 className="App-title">Lunch</h4>
          <ul className="App-topics">
            <li><a href="/user-interface#part-two">User Interface Part. Two</a></li>
            <li><a href="/installing-sinopia">Installing Sinopia Locally</a></li>
            <li><a href="/next-steps">Next steps</a></li>
          </ul>
          <a
            className="App-link"
            href="/introduction"
            rel="noopener noreferrer"
          >
            Sinopia Introduction
            <FontAwesomeIcon icon="caret-square-right" />
          </a>
        </div>
        <div className="App-body">
          <h2 className="App-title">Sinopia Front-End Lightning Talk</h2>
          <p>Naomi Dushay &amp; Jeremy Nelson</p>
        </div>
        <div className="App-body">
          <h2 className="App-title">Sinopia Server Lightening Talk</h2>
          <p>John Martin, Jeremy Nelson, &amp; Mike Giarlo</p>
        </div>
      </div>
    );
  }
}

export default Presentation;
