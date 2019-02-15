// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import NavBar from './NavBar'
import './App.css';

const BuildingResourceTemplate = () => (
  <div className="App">
    <NavBar previous="/introduction" next="/user-interface" />
    <div className="App-header">
      <h1 className="App-title">Building a <br />Resource Template</h1>
    </div>
  </div>
)

export default BuildingResourceTemplate;
