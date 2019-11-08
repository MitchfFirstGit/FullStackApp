// modules
import React from 'react'
import { Link } from 'react-router-dom';
// styles
import styles from './styles.module.scss';

const Landing = () => {
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
}

export default Landing;