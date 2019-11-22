//modules
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/components/Login';
import Register from './components/auth/components/Register';
import Notification from './components/layout/Notification';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/ProfileForms/CreateProfile'
import EditProfile from './components/ProfileForms/EditProfile'
import AddExperience from './components/ProfileForms/AddExperience'
import AddEducation from './components/ProfileForms/AddEducation'
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
//styles
import './App.css';
import setAuthToken from './utills/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (<Provider store={store}>
    <Router>
      <Navbar />

      <Route exact path="/">
        <Landing />
      </Route>

      <div className="container">
        <Notification />

        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/create-profile" component={CreateProfile} />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          <PrivateRoute exact path="/add-experience" component={AddExperience} />
          <PrivateRoute exact path="/add-education" component={AddEducation} />
        </Switch>
      </div>
    </Router>
  </Provider>
  )
}

export default App;
