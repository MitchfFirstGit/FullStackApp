import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './components/ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profiles, loading }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);
    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                    <>
                        <h1 className='large text-primary'>Developers</h1>
                        <p className='lead'>
                            <i className='fab fa-connectdevelop' /> Browse and connect with
                            developers
                        </p>
                        <div className='profiles'>
                            {profiles.length > 0 ? (
                                profiles.map(profile => (
                                    <ProfileItem key={profile._id} profile={profile} />
                                ))
                            ) : (
                                    <h4>No profiles found...</h4>
                                )}
                        </div>
                    </>
                )}
        </>
    );
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profiles: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    profiles: state.profile.profiles,
    loading: state.profile.loading
});

const mapDispatchToProps = {
    getProfiles
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profiles);