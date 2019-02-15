// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import NavBar from './NavBar'
import './App.css';

const NextSteps = () => (
  <div className="App">
    <NavBar previous="/installing-sinopia" next="/" />
    <div className="App-header">
      <h1 className="App-title">Next Steps</h1>
    </div>
  </div>
);

export default NextSteps;
