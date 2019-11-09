//modules
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/components/Login';
import Register from './components/auth/components/Register';
// Redux
import { Provider } from 'react-redux';
import store from './store';
//styles
import './App.css';

const App = () =>
  <Provider store={store}>
    <Router>
      <Navbar />

      <Route exact path="/">
        <Landing />
      </Route>

      <div className="container">
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>

export default App;
