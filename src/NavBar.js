// Copyright 2018 Stanford University see Apache2.txt for license
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends React.Component {
  render() {
    return (
      <div className="App-navbar">
        <a href={this.props.previous}>
          <FontAwesomeIcon icon="caret-square-left" />
        </a>
        <a href="/">
          <FontAwesomeIcon icon="home" />
          </a>
        <a href={this.props.next}>
          <FontAwesomeIcon icon="caret-square-right" />
        </a>
      </div>
    );
  }
}

export default NavBar;
