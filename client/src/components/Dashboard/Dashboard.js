// modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
// components
import Spinner from '../Layout/Spinner';
import DashboardButtons from './components/DashboardButtons';
import Experience from './components/Experience';
import Education from './components/Education';
// redux
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
// styles
import styles from './styles.module.scss';

const Dashboard = ({ getCurrentProfile, user, profile, loading, deleteAccount }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    const handleDeleteAccount = () => {
        deleteAccount();
    }

    return loading && profile === null ?
        <Spinner /> :
        <>
            <h1 className={styles.header}>Dashboard</h1>
            <p className={styles.title}>
                <i className="fas fa-user" /> Welcome {user && user.name}
            </p>

            {profile !== null ?
                <>
                    <DashboardButtons />
                    <Experience experience={profile.experience} />
                    <Education education={profile.education} />

                    <button className={cx(styles.button, styles.deleteButton)} onClick={handleDeleteAccount}>
                        <i className='fas fa-user-minus' /> Delete My Account
                    </button>
                </> :
                <>
                    <p>
                        You don't have a profile, please create one
                    </p>
                    <Link to='/create-profile' className={cx(styles.button, styles.deleteButton)}>
                        Create Profile
                    </Link>
                </>
            }
        </>

};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    profile: PropTypes.object,
    user: PropTypes.object,
    loading: PropTypes.bool.isRequired,

};

const mapStateToProps = state => ({
    user: state.auth.user,
    profile: state.profile.profile,
    loading: state.profile.loading,
});

const mapdispatchToProps = {
    getCurrentProfile,
    deleteAccount
}

export default connect(mapStateToProps, mapdispatchToProps)(Dashboard);
