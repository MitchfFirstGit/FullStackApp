//modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from '../Register/styles.module.scss';

const Login = () => {
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
    console.log('Success');
  };

  return (
    <>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Sign Into Your Account
      </p>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
          <small className={styles.formText}>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className={styles.formGroup}>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </>
  );
};

export default Login;
