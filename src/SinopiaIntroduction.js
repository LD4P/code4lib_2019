// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as MilestonesArchitecture } from './milestones-architecture.svg'
import { ReactComponent as ProjectLevelSuccessCriteria } from './project-level-success-criteria.svg'
import './App.css';

const SinopiaIntroduction = () => (
  <div className="App">
    <NavBar previous="/" next="/building-resource-template" />
    <div className="App-header">
      <h1 className="App-title">Introduction</h1>
      <p className="App-paragraph">Sinopia is a linked data creation environment sponsored by the
      Linked Data for Production
      (LD4P2), funded by the Andrew W. Mellon Foundation, to enable library professionals
      to do original and copy cataloging on a wide range of
      collections and contexts. Sinopia's codebase orginated from two Library of Congress projects;
      the <a href="http://bibframe.org/profile-edit/#/profile/list">Profile Editor</a> and
      <a href="http://bibframe.org/bfe/index.html">BIBFRAME Editor (BFE)</a>.
    </p>
      <ProjectLevelSuccessCriteria />
    </div>
    <div className="App-body">
      <h1 className="App-title">Milestones &amp; Architecture</h1>
      <ol className="App-title">
        <li id="M1">Stand-Alone Profile Editor + Sinopia Homepage in UAT in AWS</li>
        <li>Profile "Dress Rehearsal" + Components Confirmed + "Simple Search"</li>
        <li>User Login and "Profile Opening Night"</li>
        <li>Production of Original Data: Create and save data in Editor</li>
        <li>Full editor with search capability and cloning ability</li>
      </ol>
      <MilestonesArchitecture />
    </div>
    <div className="App-navfooter">
      <Link to="/">
        <FontAwesomeIcon icon="home" />
      </Link>&nbsp;
      <Link to="/building-resource-template">
        Building a Resource Template &nbsp;
        <FontAwesomeIcon icon="caret-square-right" />
      </Link>
    </div>
    <Footer />
  </div>
);

export default SinopiaIntroduction;
