//modules
import React, { useState } from 'react';
import { connect } from 'react-redux';
//components
import { Link } from 'react-router-dom';
//actions
import { setNotification } from '../../../../actions/notification'
// typings
import { Props } from './typings';
//styles
import styles from './styles.module.scss';

const Register = ({ setNotification }: Props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setNotification('Passwords do not match', 'danger');
    } else {
      console.log('Success');
    }
  };

  return (
    <>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>
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
            minLength={6}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type='password'
            placeholder='Confirm Password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={onChange}
            minLength={6}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </>
  );
};

export default connect(null, { setNotification })(Register);
