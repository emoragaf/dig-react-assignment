import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Products, Product } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/:prodID" component={Product} />
    <Route exact path="/" component={Products} />
  </Switch>
);

export default Routes;
