// modules
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// components
import Spinner from '../Layout/Spinner';
import ProfileTop from './components/ProfileTop';
import ProfileAbout from './components/ProfileAbout';
import ProfileExperience from './components/ProfileExperience';
import ProfileEducation from './components/ProfileEducation';
// redux
import { getProfileById } from '../../actions/profile';
// styles
import styles from './styles.module.scss';

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
            <Link to='/profiles' className={cx(styles.button, styles.buttonBack)}>
              Back To Profiles
          </Link>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to='/edit-profile' className={cx(styles.button, styles.buttonEdit)}>
                  Edit Profile
              </Link>
              )}

            <div className={styles.profileGrid}>
              <ProfileTop profile={profile} />
              <ProfileAbout profile={profile} />

              <div className={styles.profileExp}>
                <h2 className={styles.title}>Experience</h2>
                {profile.experience.length > 0 ? (
                  <>
                    {profile.experience.map(experience => (
                      <ProfileExperience
                        key={experience._id}
                        experience={experience}
                      />
                    ))}
                  </>
                ) : (
                    <h4>No experience</h4>
                  )}
              </div>
              <div className={styles.profileEdu}>
                <h2 className={styles.title}>Education</h2>
                {profile.education.length > 0 ? (
                  <>
                    {profile.education.map(education => (
                      <ProfileEducation
                        key={education._id}
                        education={education}
                      />
                    ))}
                  </>
                ) : (
                    <h4>No education </h4>
                  )}
              </div>
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
