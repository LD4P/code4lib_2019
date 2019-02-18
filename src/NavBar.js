// Copyright 2018 Stanford University see Apache2.txt for license
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends React.Component {
  render() {
    return (
      <div className="App-navbar">
        <Link to={this.props.previous}>
          <FontAwesomeIcon icon="caret-square-left" />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon="home" />
        </Link>
        <Link to={this.props.next}>
          <FontAwesomeIcon icon="caret-square-right" />
        </Link>
      </div>
    );
  }
}

export default NavBar;
