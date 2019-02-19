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
    <div className="App-body">
      <h1 className="App-title">Library of Congress's BIBFRAME Profiles</h1>
      <p>
        Sinopia forked the Library of Congress <a href="http://bibframe.org/profile-edit/#/profile/list">
        BIBFRAME Profile Editor</a> as a critical deliverable for&nbsp;
        <Link to="/introduction#M1">Milestone One</Link>. These JSON Profiles are
        file-based containers for one or more <em>Resource Templates</em> that
        contained one or more <em>Property Templates</em>.
      </p>
      <p>An exhaustive review and analysis of the current use of these
      <em>Resource Templates</em> was under took by Sinopia team member,
      Naomi Dushay and resulting in a more structured approach to Profiles that
      for Sinopia was a shift in focus to the <em>Resource Template</em> as the
      the unit of representation in the Sinopia's&nbsp;
      <a href="https://sinopia.io/editor">Linked Data Editor</a>.
      </p>
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
