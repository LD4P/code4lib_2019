// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

const BuildingResourceTemplate = () => (
  <div className="App">
    <NavBar previous="/introduction" next="/user-interface" />
    <div className="App-header">
      <h1 className="App-title">Building a Resource Template</h1>
    </div>
    <div className="App-body">
      <h1 className="App-title">Library of Congress's BIBFRAME Profiles</h1>
      <p>
        Sinopia forked the Library of Congress <a href="http://bibframe.org/profile-edit/#/profile/list">
        BIBFRAME Profile Editor</a> as a critical deliverable for&nbsp;
        <Link to="/introduction#M1">Milestone One</Link>. These JSON Profiles are
        file-based containers for one or more <em>Resource Templates</em> that
        contained one or more <em>Property Templates</em>.
      </p>
      <p>An exhaustive review of the current use of these
      <em>Resource Templates</em> was under took by Sinopia team member,
      Naomi Dushay and resulting in a more structured approach to Profiles that
      for Sinopia was a shift in focus to the <em>Resource Template</em> as the
      the unit of representation in the Sinopia's&nbsp;
      <a href="https://sinopia.io/editor">Linked Data Editor</a>. Based on this
      analysis, Sinopia uses a simplified <em>Resource Template</em> that is
      versioned and validated using JSON Schema.
      </p>
      <table>
        <thead>
          <tr>
            <th>LoC</th>
            <th>Sinopia</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>PropertyTemplate</code> type has four values:
             literal, lookup, target, and resource
            </td>
            <td><code>PropertyTemplate</code> type has three values:
            literal, lookup, target, and resource
            </td>
            <td>0.0.9</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="App-body">
      <h1 className="App-title">Resource Templates</h1>
      <p>Using the core number of contained <em>Resource Templates</em> in the
      Library of Congress Profiles in their VERSO codebase, we now validate the
      incoming Profiles using the <strong>0.0.9</strong> Schema published at the
      &nbsp;<a href="https://github.com/LD4P/sinopia/schema/0.0.9">Sinopia</a>&nbsp;
      Github website.
      </p>
      <div className="App-two-cols">
        <section>
          <h2 className="App-title">BIBFRAME 2.0 Item</h2>
          <code><pre>
          >>> code
          </pre></code>
        </section>
        <section>
          <h2 className="App-title">Sinopia Item</h2>
        </section>
      </div>
    </div>

    <div className="App-navfooter">
      <Link
      to="/introduction">
       <FontAwesomeIcon icon="caret-square-left" />&nbsp;
        Sinopia Introduction
      </Link>&nbsp;
      <Link to="/">
        <FontAwesomeIcon icon="home" />
      </Link>&nbsp;
      <Link to="/user-interface#part-one">User Interface Part. One
        &nbsp;
      <FontAwesomeIcon icon="caret-square-right" />
      </Link>
    </div>
    <Footer />
  </div>
)

export default BuildingResourceTemplate;
