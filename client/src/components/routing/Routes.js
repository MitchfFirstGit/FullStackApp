// modules
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import Register from '../auth/components/Register';
import Login from '../auth/components/Login';
import Notification from '../layout/Notification';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../ProfileForms/CreateProfile';
import EditProfile from '../ProfileForms/EditProfile';
import AddExperience from '../ProfileForms/AddExperience';
import AddEducation from '../ProfileForms/AddEducation';
import Profiles from '../Profiles';
import Profile from '../Profile';
import PrivateRoute from './PrivateRoute';
// styles
import styles from './styles.module.scss';

const Routes = () => {
    return (
        <section className={styles.container}>
            <Notification />
            <Switch>
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/profiles' component={Profiles} />
                <Route exact path='/profile/:id' component={Profile} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                <PrivateRoute exact path='/create-profile' component={CreateProfile} />
                <PrivateRoute exact path='/edit-profile' component={EditProfile} />
                <PrivateRoute exact path='/add-experience' component={AddExperience} />
                <PrivateRoute exact path='/add-education' component={AddEducation} />
            </Switch>
        </section>
    );
};

export default Routes;