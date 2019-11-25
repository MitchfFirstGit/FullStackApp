// modules
import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from './styles.module.scss';

const ProfileAbout = ({
  profile
}) => (
    <div className={styles.profileAbout }>
      {profile.bio && (
        <>
          <h2 className={styles.title}>Bio</h2>
          <p>{profile.bio}</p>
          <div className={styles.horizontalLine} />
        </>
      )}
      <h2 className={styles.title}>Skill Set</h2>
      <div className={styles.skills}>
        {profile.skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <i className='fas fa-check' /> {skill}
          </div>
        ))}
      </div>
    </div>
  );

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;