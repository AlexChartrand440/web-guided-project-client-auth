import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";

import Login from './components/Login';
import GasPrices from './components/GasPrices';

import axios from 'axios';

function App(props) {
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected">
            <GasPrices name="Josh" />
          </PrivateRoute>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
