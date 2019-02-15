// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import './App.css';
import { BrowserRouter,
  Route,
  Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons'
import BuildingResourceTemplate from './BuildingResourceTemplate';
import FourOhFour from './FourOhFour';
import InstallingSinopia from './InstallingSinopia';
import NextSteps from './NextSteps';
import Presentation from './Home';
import SinopiaIntroduction from './SinopiaIntroduction';
import UserInterface from './UserInterface';

library.add(faHome)
library.add(faCaretSquareLeft)
library.add(faCaretSquareRight)

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Presentation} />
        <Route path="/building-resource-template" component={BuildingResourceTemplate} />
        <Route path="/introduction" component={SinopiaIntroduction} />
        <Route path="/installing-sinopia" component={InstallingSinopia} />
        <Route path="/next-steps" component={NextSteps} />
        <Route path="/user-interface" component={UserInterface} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
)

export default App;
