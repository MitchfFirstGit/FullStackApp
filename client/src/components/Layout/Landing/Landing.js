// modules
import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
// styles
import styles from './styles.module.scss';

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <div className={styles.landing}>
            <div className={styles.darkOverlay}>
                <div className={styles.landingInner}>
                    <h1 className={styles.header}>Knowledge Share App</h1>
                    <p className={styles.title}>
                        Create profile, share posts and get help from other developers
                    </p>
                    <div className="buttons">
                        <Link to="/register" className={cx(styles.button, styles.signInButton)}>Sign up</Link>
                        <Link to="/login" className={cx(styles.button, styles.loginButton)}>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps)(Landing);
