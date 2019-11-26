// modules
import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// redux
import { logout } from '../../../actions/auth';
// styles
import styles from './styles.module.scss';

const Navbar = ({ isAuthenticated, loading, logout }) => {
    const authLinks = (
        <ul className>
            <li>
                <Link to='/profiles'>Developers</Link>
            </li>
            <li>
                <Link to="/dashboard">
                    <i className="fas fa-user"></i>
                    <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/" onClick={logout}>
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </Link>
            </li>
        </ul>
    );

    const guesLinks = (
        <ul>
            <li>
                <Link to='/profiles'>Developers</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    );

    return (
        <div className={cx(styles.navbar, styles.bgDark)}>
            <h1>
                <Link to="/" className={styles.header}>
                    <i className="fas fa-code"></i> Knowledge Share
                </Link>
            </h1>
            {!loading && (<>{isAuthenticated ? authLinks : guesLinks}</>)}
        </div>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
});

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
