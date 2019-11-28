// modules
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components
import { Link } from 'react-router-dom';
// redux
import { setNotification } from '../../../../actions/notification'
import { register } from '../../../../actions/auth';
// styles
import styles from './styles.module.scss';

const Register = ({ setNotification, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  }

  const onSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setNotification('Passwords do not match', 'danger');
    } else {
      register(name, email, password)
    }
  };

  if (isAuthenticated) {
    return <Redirect to="dashboard" />
  }

  return (
    <>
      <h1 className={styles.header}>Sign Up</h1>
      <p className={styles.title}>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onChange}
        />
        <input
          type='email'
          placeholder='Email Address'
          name='email'
          value={email}
          onChange={onChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={onChange}
        />
        <input
          type='password'
          placeholder='Confirm Password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={onChange}
        />
        <input type='submit' className={styles.submitButton} value='Register' />
      </form>
      <p className={styles.link}>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </>
  );
};

Register.propTypes = {
  setNotification: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  setNotification,
  register
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
