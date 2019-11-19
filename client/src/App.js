//modules
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/components/Login';
import Register from './components/auth/components/Register';
import Notification from './components/layout/Notification';
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
//styles
import './App.css';

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

          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    </Router>
  </Provider>
  )
}

export default App;
