// modules
import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';
//styles
import styles from './styles.module.scss';


// interface DispatchProps {
//     logout: typeof logout;
// }

// type Props = ReturnType<typeof mapStateToProps>  & DispatchProps;

const Navbar = ({ isAuthenticated, loading, logout }: any) => {
    const authLinks = (
        <ul>
            <li>
                <Link to="/dashboard">
                    <i className="fas fa-user"></i>
                    <span className="hide-sm">Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/" onClick={logout}>
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="hide-sm">Logout</span>
                </Link>
            </li>
        </ul>
    );

    const guesLinks = (
        <ul>
            <li>
                <Link to="/profiles">Developers</Link>
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
                <Link to="/">
                    <i className="fas fa-code"></i> Knowledge Share App
                </Link>
            </h1>
            {!loading && (<>{isAuthenticated ? authLinks : guesLinks}</>)}
        </div>
    )
};

const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading
});

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
