import React, { Component } from 'react';
import ProfileDetails from './Profile';
import './index.css';
const user = {
  firstName: 'Mohsen',
  lastName: 'Moradi',
  email: 'mohsen@codeyourfuture.io',
  city: 'London',
  tel: '0987654323',
  gender: 'Male',
  isAsylumSeekerOrRefugee: true,
  cyfStudent: true,
  avatar: 'https://avatars3.githubusercontent.com/u/30389896?v=4',
};
class Profile extends Component {
  UNSAFE_componentWillMount() {}
  render() {
    // const { user } = this.props;
    return (
      <div className="container">
        <ProfileDetails user={user} />
      </div>
    );
  }
}

export default Profile;
