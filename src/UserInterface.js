// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import NavBar from './NavBar'
import './App.css';

const UserInteface = () => (
  <div className="App">
    <NavBar previous="/building-resource-template" next="/installing-sinopia" />
    <div className="App-header">
      <h1 className="App-title">User Interface</h1>
    </div>
  </div>
);

export default UserInteface;
