// modules
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// redux
import { login } from '../../../../actions/auth';
// styles
import styles from '../Register/styles.module.scss';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  }

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="dashboard" />
  }

  return (
    <>
      <h1 className={styles.header}>Sign In</h1>
      <p className={styles.title}>
        <i className='fas fa-user' /> Sign Into Your Account
      </p>
      <form className={styles.form} onSubmit={onSubmit}>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
            minLength={6}
          />
        <input type='submit' className={styles.submitButton} value='Login' />
      </form>
      <p className={styles.link}>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
