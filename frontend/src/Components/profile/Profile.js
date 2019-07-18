import React from 'react';
import EditProfileForm from './EditProfile';
import Profile from '../Nav/profile.svg';

export default ({ user }) => {
  return (
    <div className="user-profile">
      <div className="user-profile-section-one">
        <div className="user-profile-avatar">
          <img src={user.avatar ? user.avatar : Profile} alt="avatar" width="100%" height="100%" />
        </div>
        <div className="user-profile-name-btn">
          <span className="user-profile-name">
            {user.firstName} {user.lastName}
          </span>
          <span />
          <span>
            <button
              type="button"
              className="btn user-profile-edit-button"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Edit Profile
            </button>
            <div
              className="modal fade"
              id="exampleModalCenter"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      Update profile
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <EditProfileForm user={user} />
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div>
        <dl className="row">
          <dt className="col-sm-5 position-static">Email</dt>
          <dd className="col-sm-7 position-static">{user.email}</dd>
          <dt className="col-sm-5 position-static">Phone Number</dt>
          <dd className="col-sm-7 position-static">{user.tel}</dd>
          <dt className="col-sm-5 position-static">City</dt>
          <dd className="col-sm-7 position-static">{user.city}</dd>
          <dt className="col-sm-5 position-static">Gender</dt>
          <dd className="col-sm-7 position-static">{user.gender}</dd>
          <dt className="col-sm-5 position-static">Asylum seeker or refugee?</dt>
          <dd className="col-sm-7 position-static">{user.isAsylumSeekerOrRefugee ? 'Yes' : 'No'}</dd>
          <dt className="col-sm-5 position-static">Code your future student?</dt>
          <dd className="col-sm-7 position-static">{user.cyfStudent ? 'Yes' : 'No'}</dd>
        </dl>
      </div>
    </div>
  );
};
