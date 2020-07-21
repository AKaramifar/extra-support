import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from '../Auth/Private';
import Home from '../Screens/Home';
import Categories from '../Screens/Categories';
import Sessions from '../Screens/Sessions';
import VolunteerBooking from '../Screens/VolunteerBookings';
import Booking from '../Screens/Booking';
import Profile from '../Components/profile';
import Register from '../Components/register';
import StudentBookings from '../Components/StudentBookings';
import Login from '../Components/Login';
import LoginVolunteer from '../Components/LoginVolunteer';
import AvailabilityForm from '../Screens/Volunteer/AvailabilityForm';
import SessionForm from '../Screens/Volunteer/SessionForm';
import VolunteerRegister from '../Components/VolunteerRegister';
import VolunteerLogin from '../Auth/Login';
export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/volunteer/login" component={LoginVolunteer} />
    <Route exact path="/volunteer/register/:volunteerId" component={VolunteerRegister} />
    <Route exact path="/student/login" component={Login} />
    <Route exact path="/volunteer/login/:token" component={VolunteerLogin} />
    <Private exact path="/categories" component={Categories} roles={['STUDENT']} />
    <Private exact path="/sessions/:categoryId?" component={Sessions} roles={['STUDENT']} />
    <Private exact path="/booking/:sessionId?" component={Booking} roles={['STUDENT']} />
    <Private exact path="/profile" component={Profile} roles={['STUDENT', 'VOLUNTEER']} />
    <Private exact path="/volunteer/availability/form" component={AvailabilityForm} roles={['VOLUNTEER']} />
    <Private exact path="/volunteer/session/form" component={SessionForm} roles={['VOLUNTEER']} />
    <Private exact path="/student/bookings" component={StudentBookings} roles={['STUDENT']} />
    <Private exact path="/volunteer/bookings" component={VolunteerBooking} roles={['VOLUNTEER']} />
  </Switch>
);
