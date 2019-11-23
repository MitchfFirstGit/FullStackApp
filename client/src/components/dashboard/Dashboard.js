// modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// components
import Spinner from '../layout/Spinner';
import DashboardButtons from './components/DashboardButtons';
import Experience from './components/Experience';
import Education from './components/Education';
// redux
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

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
            <h1 className='large text-primary'>Dashboard</h1>
            <p className='lead'>
                <i className="fas fa-user" /> Welcome {user && user.name}
            </p>

            {profile !== null ?
                <>
                    <DashboardButtons />
                    <Experience experience={profile.experience} />
                    <Education education={profile.education} />

                    <div className='my-2'>
                        <button className='btn btn-danger' onClick={handleDeleteAccount}>
                            <i className='fas fa-user-minus' /> Delete My Account
                        </button>
                    </div>
                </> :
                <>
                    <p>
                        You don't have a profile, please create one
                    </p>
                    <Link to='/create-profile' className='btn btn-primary my-1'>
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
