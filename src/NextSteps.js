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
    <div className="App-navfooter">
      <Link to="/user-interface#part-two">
      <FontAwesomeIcon icon="caret-square-left" />&nbsp;
       User Interface Part. Two
      </Link>&nbsp;
      <Link to="/">
        <FontAwesomeIcon icon="home" />
      </Link>&nbsp;
    </div>
    <Footer />
  </div>
);

export default NextSteps;
