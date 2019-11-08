// modules
import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
//styles
import styles from './styles.module.scss';

const Navbar = () => {
    return (
        <div className={cx(styles.navbar, styles.bgDark)}>
            <h1>
                <Link to="/">
                    <i className="fas fa-code"></i> Knowledge Share App 
                </Link>
            </h1>
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
        </div>
    )
}

export default Navbar;
