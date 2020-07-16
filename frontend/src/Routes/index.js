import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from '../Auth/Private';
import Home from '../Screens/Home';
import Categories from '../Screens/Categories';
import Tutorials from '../Screens/Tutorials';
import Booking from '../Screens/Booking';
import Profile from '../Components/profile';
import Register from '../Components/register';
import Login from '../Components/Login';
import LoginVolunteer from '../Components/LoginVolunteer';
import AvailabilityForm from '../Screens/Volunteer/AvailabilityForm';
import SessionForm from '../Screens/Volunteer/SessionForm';
export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/volunteer/login" component={LoginVolunteer} />
    <Route exact path="/student/login" component={Login} />
    <Private exact path="/categories" component={Categories} />
    <Private exact path="/category/:category?" component={Tutorials} />
    <Private exact path="/booking/:cat?" component={Booking} />
    <Private exact path="/profile" component={Profile} />
    <Private exact path="/volunteer/availability/form" component={AvailabilityForm} />
    <Private exact path="/volunteer/session/form" component={SessionForm} />
  </Switch>
);
