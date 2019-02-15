// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import NavBar from './NavBar'
import './App.css';

const SinopiaIntroduction = () => (
  <div className="App">
    <NavBar previous="/" next="/building-resource-template" />
    <div className="App-header">
      <h1 className="App-title">Introduction</h1>
    </div>
  </div>
);

export default SinopiaIntroduction;
