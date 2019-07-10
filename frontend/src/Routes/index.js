import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Screens/Home';
import Categories from '../Screens/Categories';
import Tutorials from '../Screens/Tutorials';
// import CategoryContent from '../Components/CategoryContent';
export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/categories" component={Categories} />
    <Route exact path="/tutorials/:category?" component={Tutorials} />

    {/* <Route component={NotFound} /> */}
  </Switch>
);
