//modules
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//components
import { Link } from 'react-router-dom';
//actions
import { setNotification } from '../../../../actions/notification'
import { register } from '../../../../actions/auth';
// typings
// import { Props as RegisterProps} from './typings';
//styles
import styles from './styles.module.scss';

// interface DispatchProps {
//   setNotification: (msg: string, notificationType: string, timeout: number) => void,
//   register: (name: string, email: string, password: string) => void
// }

// type Props =   RegisterProps & ReturnType<typeof mapStateToProps> & DispatchProps;

// type Props = RegisterProps & ReturnType<typeof mapStateToProps>  & ReturnType<typeof mapDispatchToProps>;

const Register = ({ setNotification, register, isAuthenticated }: any) => {
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
      console.log('hi')
      setNotification('Passwords do not match', 'danger');
    } else {
      register({ name, email, password })
    }
  };

  if(isAuthenticated) {
    return <Redirect to="dashboard" />
  }

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
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={onChange}
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
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type='password'
            placeholder='Confirm Password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={onChange}
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

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps =  {
    setNotification,
    register
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
