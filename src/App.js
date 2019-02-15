import React, { Component } from 'react';
import './App.css';
import SinopiaIntroduction from './SinopiaIntroduction'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2 className="App-title">Code4Lib 2019</h2>
          <h1 className="App-title">Sinopia Preconference</h1>
          <p>
            Jeremy Nelson &amp; Astrid Usong
          </p>

          <ul>
            <h3 className="App-title">Schedule</h3>
            <li>Sinopia Introduction</li>
            <li>Building a Resource Template</li>
            <li>User Interface Part. One</li>

          <h4 className="App-title">Lunch</h4>

            <li>User Interface Part. Two</li>
            <li>Installing Sinopia Locally</li>
            <li>Next steps</li>
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule
          </a>
        </header>
      </div>
    );
  }
}

export default App;
