// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

const InstallingSinopia = () => (
  <div className="App">
    <NavBar previous="/user-interface" next="/next-steps" />
    <div className="App-header">
      <h1 className="App-title">Installing Sinopia Locally</h1>
    </div>
    <div className="App-body">
      <h1 className="App-title">
        Install <strong>node</strong> and <strong>npm</strong>
      </h1>
      <ol>
        <li>Open <a href="https://nodejs.io">Nodejs</a> website and
         click on the <strong>Download</strong> button for your operating
         system.
        </li>
        <li>Double-click or open installer and follow directions for
         installing <em>node js</em> and the node package manager (npm)
        </li>
        <li>Open a terminal and check to see if what version of node js
          is installed:
          <code><pre>$ node --version</pre></code>
          <code><pre>v10.11.0</pre></code></li>
        <li>Next check to see if <strong>npm</strong> is installed and
          the version:
          <code><pre>$ npm --version</pre></code>
          <code><pre>6.7.0</pre></code>
        </li>
      </ol>
    </div>
    <div className="App-body">
      <h1 className="App-title">Download Sinopia version <strong>0.2.0</strong></h1>
      <ol>
        <li>Open the Sinopia Editor Github website
            at <a href="https://github.com/LD4P/sinopia_editor">
            https://github.com/LD4P/sinopia_editor</a>
        </li>
        <li>Click on the <strong>Releases tab</strong> and download the
          tagged release <em>0.2.0</em>
        </li>
        <li>Unzip the downloaded file to your local hard-drive
          <code><pre> $ unzip sinopia_editor-0.2.0.zip</pre></code>
        </li>
      </ol>
    </div>
    <div className="App-body">
      <h1 className="App-title">Install and Build Sinopia Linked Data Editor</h1>
      <ol>
        <li>Change to the Sinopia Linked Data Editor directory:
          <code><pre>$ cd sinopia_editor</pre></code>
        </li>
        <li>Run <strong>npm install</strong> command to install all of the Sinopia
        Linked Data Editor node module dependencies.
          <code><pre>$ npm install</pre></code>
        </li>
      </ol>
    </div>
    <div className="App-body">
      <h1 className="App-title">Run Sinopia's Linked Data Editor</h1>
      <ol>
        <li>From the Sinopia Linked Data Editor's home directory,
          run <strong>npm start</strong> to run the editor locally using
          the Express web server.
          <code><pre>$ npm start</pre></code>
          The Sinopia Linked Data Editor will be available
          at <a href="http://localhost:8000">http://localhost:8000</a> in your
          local web browser.
        </li>
        <li>If you want to make changes to the code an immediately see the results
         in your browser, used the Webpack development server by using the
         command, <strong>npm run dev-start</strong>.
         <code><pre>$ npm run dev-start</pre></code>
         The Sinopia Linked Data Editor development server will be available
         at <a href="http://localhost:8080">http://localhost:8080</a> in your
         local web browser.
        </li>
      </ol>
    </div>
    <div className="App-body">
      <h1 className="App-title">Running Test Suites</h1>
      <ol>
        <li>You can also run all of the unit and integration tests with
         <a href="https://jestjs.io">Jest</a> with:
         <code><pre>$ npm test</pre></code>
         You may or may not pass all of the
         tests dues to the asyncronis timing behavior of some of the integration
         tests (don't worry, they all pass in continous integration testing
         job in our Circle-CI instance)
        </li>
      </ol>
    </div>
    <div className="App-navfooter">
      <Link to="/user-interface#part-two">
        <FontAwesomeIcon icon="caret-square-left" />&nbsp;
        User Interface Part. Two
      </Link>&nbsp;
      <Link to="/">
        <FontAwesomeIcon icon="home" />
      </Link>&nbsp;
      <Link to="/next-steps">Next Steps
        &nbsp;
        <FontAwesomeIcon icon="caret-square-right" />
      </Link>
    </div>
    <Footer />
  </div>
);

export default InstallingSinopia;
