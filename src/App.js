// Copyright 2019 Stanford University see Apache2.txt for license
import React from 'react';
import './App.css';
import { BrowserRouter,
  Route,
  Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons'
import BuildingResourceTemplate from './BuildingResourceTemplate';
import CatalogingInterfaceForLinkedData from './CatalogingInterfaceForLinkedData';
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Presentation} />
        <Route exact path="/code4lib_2019" component={Presentation} />
        <Route path="/building-resource-template" component={BuildingResourceTemplate} />
        <Route path="/cataloging-interface" component={CatalogingInterfaceForLinkedData} />
        <Route path="/code4lib_2019/building-resource-template" component={BuildingResourceTemplate} />
        <Route path="/code4lib_2019/introduction" component={SinopiaIntroduction} />
        <Route path="/introduction" component={SinopiaIntroduction} />
        <Route path="/installing-sinopia" component={InstallingSinopia} />
        <Route path="/code4lib_2019/installing-sinopia" component={InstallingSinopia} />
        <Route path="/next-steps" component={NextSteps} />
        <Route path="/code4lib_2019/next-steps" component={NextSteps} />
        <Route path="/user-interface" component={UserInterface} />
        <Route path="/code4lib_2019/user-interface" component={UserInterface} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
)
export default App;
