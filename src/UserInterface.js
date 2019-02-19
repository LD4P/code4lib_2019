// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import NavBar from './NavBar'
import { Link } from 'react-router-dom';
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

const UserInteface = () => (
  <div className="App">
    <NavBar previous="/building-resource-template" next="/installing-sinopia" />
    <div className="App-header">
      <h1 className="App-title">User Interface</h1>
    </div>
    <div className="App-navfooter">
      <Link to="/building-resource-template">
      <FontAwesomeIcon icon="caret-square-left" />
      &nbsp;Building a Resource Template
      </Link>&nbsp;
      <Link to="/">
        <FontAwesomeIcon icon="home" />
      </Link>&nbsp;
      <Link to="/installing-sinopia">Installing Sinopia Locally 
        &nbsp;
        <FontAwesomeIcon icon="caret-square-right" />
      </Link>
    </div>
    <Footer />
  </div>
);

export default UserInteface;
