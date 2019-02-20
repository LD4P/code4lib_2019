// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import Footer from './Footer'
import NavBar from './NavBar'

import EditionProfile from './images/lightning/editionProfile.png';
import LanguageProfile from './images/lightning/langProfile.png';
import PlaceProfile from './images/lightning/placeProfile.png';

import './App.css';

const CatalogingInterfaceForLinkedData = () => (
  <div className="App">
    <div className="App-header">
      <h2 className="App-title">Code4Lib - Sinopia Lightning Talk</h2>
      <h1 className="App-title">Cataloging Interface for Linked Data</h1>
    </div>
    <div className="App-body">
      <h2 className="App-title">Linked Data is Hard</h2>
      <p>
        Linked Data is very granular, need a better conceptual framework for
        faciltate productive CRUD operations at the level of RDF triples.
        Library of Congress organized their
        <a href="http://bibframe.org/bfe/index.html">BIBFRAME Editor</a> using
        an abstraction for creating and editing BIBFRAME entities using a kind of JSON-based
        domain specific language (DSL) called BIBFRAME Profiles. These profiles allows us to construct
        specialized HTML forms to create BIBFRAME building blocks based on
        Works, Instances, Items, Agents, etc.
      </p>
    </div>
    <div className="App-body">
      <h2 className="App-title">Sinopia's Linked Data Editor</h2>
      <p>
      Sinopia's Linked Data Editor constructs RDF based on HTML forms.
      The current work-in-progress is available
      at <a href="https://sinopia.io/editor">https://sinopia.io/editor</a>.

      </p>
      <p>
      What forms are displayed are variable and depends on the Resource
      Templates and the template's contained Property Templates.
      </p>
    </div>
    <div className="App-body">
      <h2 className="App-title">Resource Template JSON DSL</h2>
      <p>
      These forms are configurable using the Resource Template JSON DSL.
      </p>
      <h3 className="App-title">Edition Profile</h3>
      <img src={EditionProfile} alt="Edition Profile" width="800px" />
      <h3 className="App-title">Language Profile</h3>
      <img src={LanguageProfile} alt="Language Profile" width="800px" />
      <h3 className="App-title">Place Profile</h3>
      <img src={PlaceProfile} alt="Place Profile" width="800px" />
      <p>
      Sinopia has a way to construct these templates using our fork
      of the Profile Editor available
      at <a href="https://profile-editor.sinopia.io/">https://profile-editor.sinopia.io/</a>.
      </p>
    </div>
    <Footer />
  </div>
)

export default  CatalogingInterfaceForLinkedData;
