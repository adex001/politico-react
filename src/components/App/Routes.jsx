import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '@containers/Homepage';
import Signup from '@containers/auth/Signup';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Signup} />
    </Switch>
  </Router>
);

export default Routes;