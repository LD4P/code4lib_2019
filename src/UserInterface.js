// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import NavBar from './NavBar'
import { Link } from 'react-router-dom';
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditSaveUI from './edit-save.png';
import HomePageUI from './homepage-ui.png';
import SearchUI from './all-results-hover.png';
import './App.css';

const UserInteface = () => (
  <div className="App" name="part-one">
    <NavBar previous="/building-resource-template" next="/installing-sinopia" />
    <div className="App-header">
      <h1 className="App-title">User Interface</h1>
      <p>Sinopia is fortunate to have Astrid Usong as our UIX designer who
       has created the branding, user interface, and user interaction flows
       for the various front-end components.</p>
    </div>
    <div className="App-body">
      <h1 className="App-title">Home Page</h1>
      <img src={HomePageUI} alt="Sinopia Homepage Design"/>
    </div>
    <div className="App-body">
      <h1 className="App-title">Sinopia and QA Search</h1>
      <img src={SearchUI} alt="Sinopia Search" />
    </div>
    <div className="App-body">
      <h1 className="App-title">Edit and Save</h1>
      <img src={EditSaveUI} alt="Edit and Save" />
    </div>
    <hr />
    <div className="App-body">
      <h1 className="App-title">User Testing Exercise</h1>
    </div>
    <div className="App-body" name="part-two">
      <h1 className="App-title">Blue-sky User Interface Exercise</h1>
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
