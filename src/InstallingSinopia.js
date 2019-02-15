// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import NavBar from './NavBar'
import './App.css';

const InstallingSinopia = () => (
  <div className="App">
    <NavBar previous="/user-interface" next="/next-steps" />
    <div className="App-header">
      <h1 className="App-title">Installing Sinopia Locally</h1>
    </div>
  </div>
);

export default InstallingSinopia;
