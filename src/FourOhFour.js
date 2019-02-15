// Copyright 2018 Stanford University see Apache2.txt for license
import React from 'react';
import './App.css';


const FourOhFour = ({ location }) => (
  <div className="App">
    <div class="App-header">
      <h1 className="App-title">404 </h1>
      <p>{location.pathname} - Page not Found</p>
    </div>
  </div>
);

export default FourOhFour;
