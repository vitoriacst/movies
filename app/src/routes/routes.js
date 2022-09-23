import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Checkout from '../pages/checkout';
import Cards from '../components/cards'

const Routes = () => {

  return (
    <Switch>
      <Route path='/checkout' component={Checkout}/>
      <Route path='/'  component={Cards}/>
    </Switch>
   );
}

export default Routes;
