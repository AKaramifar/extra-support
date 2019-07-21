import React, { Component } from 'react';
import ProfileDetails from './Profile';
import swal from 'sweetalert';
import { getProfile } from '../../Auth/index';
import './index.css';
import axios from 'axios';
import Loading from '../Loading';
class Profile extends Component {
  state = {
    user: {},
  };

  async UNSAFE_componentWillMount() {
    const profile = getProfile();
    try {
      const user = await axios.get(`https://extra-support-backend.glitch.me/user/${profile._id}`);
      this.setState({ user: user.data });
    } catch (err) {
      return swal('No user', 'Somethings went wrong, please try again later.', 'error');
    }
  }
  render() {
    const { user } = this.state;
    if (!user.firstName) {
      return <Loading />;
    }
    return (
      <div className="container">
        <ProfileDetails user={user} />
      </div>
    );
  }
}

export default Profile;
