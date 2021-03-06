// modules
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// components
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Routes from './components/Routing/Routes';
// Redux
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utills/setAuthToken';
// styles
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

export default App;