// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer'
import NavBar from './NavBar'

import './App.css';

const NextSteps = () => (
  <div className="App">
    <NavBar previous="/installing-sinopia" next="/" />
    <div className="App-header">
      <h1 className="App-title">Next Steps</h1>
    </div>
    <div className="App-body">
      <h2 className="App-title">April - Soft launch of MVP</h2>
      <p>Cohorts start using Sinopia for their projects while development
       focuses on bug fixes and backfill functionality based on user
       needs.</p>
      <h2 className="App-title">May - LD4P Conference</h2>
      <h2 className="App-title">Fall 2019 - Start Work Cycle 2</h2>
      <p>Based on Cohort and other testing, design and functional
       requirements generated for second work cycle.</p>
    </div>
    <div className="App-body">
      <h2 className="App-title">Get involved</h2>
      <ul>
        <li>Join LD4P Slack channel: ld4.slack.com</li>
        <li>Main Github repositories for the project:
          <ul>
            <li>Technical Documentation and Resource Template Schemas <a href="https://github.com/LD4P/sinopia">https://github.com/LD4P/sinopia</a></li>
            <li>Sinopia Linked Data Editor <a href="https://github.com/LD4P/sinopia_editor">https://github.com/LD4P/sinopia_editor</a></li>
            <li>Sinopia Profile Editor <a href="https://github.com/LD4P/sinopia_profile_editor">https://github.com/LD4P/sinopia_profile_editor</a></li>
            <li>Sinopia Sample Profiles <a href="https://github.com/LD4P/sinopia_sample_profiles">https://github.com/LD4P/sinopia_sample_profiles</a></li>
            <li>Sinopa Server <a href="https://github.com/LD4P/sinopia_server">https://github.com/LD4P/sinopia_server</a></li>
          </ul>
        </li>
        <li>Monitor Sinopia Homepage at <a href="http://sinopia.io/">Sinopia.io</a> for
            the latest news.</li>
      </ul>
    </div>
    <div className="App-body">
      <h2 className="App-title">User Interface</h2>
      <ul>
        <li>Sinopia <a href="https://invis.io/5YNLDND63KF">Persona</a></li>
        <li>Sinopia <a href="https://invis.io/WDQFD026J9F">Profile Tab</a></li>
      </ul>
    </div>
    <div className="App-navfooter">
      <Link to="/installing-sinopia">
      <FontAwesomeIcon icon="caret-square-left" />&nbsp;
       Installing Sinopia
      </Link>&nbsp;
      <Link to="/">
        <FontAwesomeIcon icon="home" />
      </Link>&nbsp;
    </div>
    <Footer />
  </div>
);

export default NextSteps;
