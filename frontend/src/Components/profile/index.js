import React, { Component } from 'react';
import ProfileDetails from './Profile';
import './index.css';
const user = {
  firstName: 'Elamin',
  lastName: 'Fadlalla',
  email: 'aldeez911088@gmail.com',
  city: 'London',
  tel: '0746666646',
  gender: 'Male',
  isAsylumSeekerOrRefugee: true,
  cyfStudent: true,
  avatar: 'https://avatars3.githubusercontent.com/u/45502633?s=400&v=4',
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
