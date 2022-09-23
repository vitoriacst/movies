import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Checkout from '../pages/checkout';
import Cards from '../components/Cards'

const Routes = () => {

  return (
    <Switch>
      <Route exact path='/checkout' component={Checkout}/>
      <Route exact path='/'  component={Cards}/>
    </Switch>
   );
}

export default Routes;
