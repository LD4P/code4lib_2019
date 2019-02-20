// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import Footer from './Footer'
import NavBar from './NavBar'

import './App.css';

const CatalogingInterfaceForLinkedData = () => (
  <div className="App">
    <NavBar previous="/installing-sinopia" next="/" />
    <div className="App-header">
      <h2 className="App-title">Sinopia</h2>
      <h1 className="App-title">Cataloging Interface for Linked Data</h1>
    </div>
    <div className="App-body">
      <h2 className="App-title">Linked Data is Hard</h2>
      <p>
        Linked Data is very granular, need a better conceptual framework for
        faciltate productive CRUD operations at the level of RDF triples.
        Library of Congress organized their BIBFRAME Editor using an abstraction
        for creating and editing BIBFRAME entities using a kind of JSON-based
        domain specific language (DSL). These profiles allows us to construct
        specialized HTML forms to create BIBFRAME building blocks based on
        Works, Instances, Items, Agents, etc.
      </p>
    </div>
    <div className="App-body">
      <h2 className="App-title">Sinopia's Linked Data Editor</h2>
      <p>
      Sinopia's Linked Data Editor constructs RDF based on HTML forms.
      [Show].
      </p>
      <p>
      What forms are displayed are variable. [Show examples]
      </p>
    </div>
    <div className="App-body">
      <h2 className="App-title">Resource Template JSON DSL</h2>
      <p>
      These forms are configurable using the Resource Template JSON DSL.
      [Show raw JSON of Place or Form] and then compare loading introduction
      PE and then the Editor
      </p>
      <p>
      Sinopia has a way to construct these templates using our fork
      of the Profile Editor.
      </p>
    </div>
    <Footer />
  </div>
)

export default  CatalogingInterfaceForLinkedData;
