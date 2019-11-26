
// modules
import React from 'react';
import { Link } from 'react-router-dom';
// styles
import styles from './styles.module.scss';

const DashboardButtons = () => {
  return (
    <div className={styles.dashButtons}>
      <Link to='/edit-profile' className={styles.button}>
        <i className='fas fa-user-circle' /> Edit Profile
      </Link>
      <Link to='/add-experience' className={styles.button}>
        <i className='fab fa-black-tie' /> Add Experience
      </Link>
      <Link to='/add-education' className={styles.button}>
        <i className='fas fa-graduation-cap' /> Add Education
      </Link>
    </div>
  );
};

export default DashboardButtons;