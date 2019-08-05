import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '@containers/Homepage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  </Router>
);

export default Routes;