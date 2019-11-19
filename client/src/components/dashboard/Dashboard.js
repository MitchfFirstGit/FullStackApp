// modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);

    return (
        <div>
            Dashboard
        </div>
    )
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

const mapdispatchToProps = {
    getCurrentProfile
}

export default connect(mapStateToProps, mapdispatchToProps)(Dashboard);
