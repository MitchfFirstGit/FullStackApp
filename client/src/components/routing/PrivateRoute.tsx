// modules
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {Props} from './typings';

const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    loading,
    ...rest
}: Props) => (
        <Route
            {...rest}
            render={props => !isAuthenticated && !loading ?
                <Redirect to='/login' /> :
                <Component {...props} />
            }
        />
    );

const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
})

export default connect(mapStateToProps)(PrivateRoute);
