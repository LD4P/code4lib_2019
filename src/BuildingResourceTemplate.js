// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

const BuildingResourceTemplate = () => (
  <div className="App">
    <NavBar previous="/introduction" next="/user-interface" />
    <div className="App-header">
      <h1 className="App-title">Building a Resource Template</h1>
    </div>
    <div className="App-navfooter">
      <Link
      to="/introduction">
       <FontAwesomeIcon icon="caret-square-left" />&nbsp;
        Sinopia Introduction
      </Link>&nbsp;
      <Link to="/">
        <FontAwesomeIcon icon="home" />
      </Link>&nbsp;
      <Link to="/user-interface#part-one">User Interface Part. One
        &nbsp;
      <FontAwesomeIcon icon="caret-square-right" />
      </Link>
    </div>
    <Footer />
  </div>
)

export default BuildingResourceTemplate;
