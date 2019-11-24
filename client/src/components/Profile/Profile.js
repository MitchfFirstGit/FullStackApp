import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import ProfileTop from './components/ProfileTop';
import ProfileAbout from './components/ProfileAbout';

const Profile = ({
  getProfileById,
  profile,
  loading,
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <>
      {profile === null || loading ? (
        <Spinner />
      ) : (
          <>
            <Link to='/profiles' className='btn btn-light'>
              Back To Profiles
          </Link>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to='/edit-profile' className='btn btn-dark'>
                  Edit Profile
              </Link>
              )}

            <div className='profile-grid my-1'>
              <ProfileTop profile={profile} />
              <ProfileAbout profile={profile} />
            </div>
          </>
        )}
    </>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile.profile,
  loading: state.profile.loading,
  auth: state.auth
});

const mapDispatchToProps = {
  getProfileById
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
