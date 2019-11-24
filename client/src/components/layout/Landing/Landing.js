// modules
import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// styles
import styles from './styles.module.scss';

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <div className={styles.landing}>
            <div className="dark-overlay">
                <div className={styles.landingInner}>
                    <h1 className="x-large">Knowledge Share App</h1>
                    <p className="lead">
                        Create profile, share posts and get help from other developers
                        </p>
                    <div className="buttons">
                        <Link to="/register" className="btn btn-primary">Sign up</Link>
                        <Link to="/login" className="btn btn-light">Login</Link>
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
