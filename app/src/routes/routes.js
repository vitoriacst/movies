import React from "react";
import { Route, Switch } from "react-router-dom";
import Checkout from "../pages/checkout";
import Movies from "../pages/Home/Movies";
import Search from "../pages/search";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/" component={Movies} />
    </Switch>
  );
};

export default Routes;
