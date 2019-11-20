// modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'

const Dashboard = ({ getCurrentProfile, user, profile, loading }) => {
    useEffect(() => {
        
        getCurrentProfile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return loading && profile === null ?
        <Spinner /> :
        <>
            <h1 className='large text-primary'>Dashboard</h1>
            <p className='lead'>
                <i className="fas fa-user" /> Welcome {user && user.name}
            </p>

            {profile !== null ?
                <>has</> :
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

const mapStateToProps = state => ({
    user: state.auth.user,
    profile: state.profile.profile,
    loading: state.profile.loading,
});

const mapdispatchToProps = {
    getCurrentProfile
}

export default connect(mapStateToProps, mapdispatchToProps)(Dashboard);
