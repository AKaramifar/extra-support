import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Screens/Home';
import Categories from '../Screens/Categories';
import Tutorials from '../Screens/Tutorials';
import Benefit from '../Screens/Benefit';
// import CategoryContent from '../Components/CategoryContent';
export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/categories" component={Categories} />
    <Route exact path="/education/:category?" component={Tutorials} />
    <Route exact path="/education/:category?" component={Tutorials} />
    <Route exact path="/benefits/:category?" component={Benefit} />

    {/* <Route component={NotFound} /> */}
  </Switch>
);
