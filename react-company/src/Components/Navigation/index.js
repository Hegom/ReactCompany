import React, { Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import Products from '../Products'
import Clients from '../Clients'
import Contact from '../Contact'
import Home from '../Home'

const Navigation = () => (
  <Fragment>
    <hr />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:category" component={Products} />
      <Route path="/clients" component={Clients} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Fragment>
)

export default Navigation;
