import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from '../Auth/Private'
import Home from '../Screens/Home';
import Categories from '../Screens/Categories';
import Tutorials from '../Screens/Tutorials';
import Booking from '../Screens/Booking';
import Profile from '../Components/profile';
import Register from '../Components/register'
export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Private exact path="/categories" component={Categories} />
    <Private exact path="/category/:category?" component={Tutorials} />
    <Private exact path="/booking/:cat?" component={Booking} />
    <Private exact path="/profile" component={Profile} />

    {/* <Route component={NotFound} /> */}
  </Switch>
);
