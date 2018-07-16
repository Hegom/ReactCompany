import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Products from '../Products'
import Clients from '../Clients'
import Contact from '../Contact'
import Links from './links'
//import './style.scss';

class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <Links />
          <hr />
          <Route exact path="/" />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:category" component={Products} />
          <Route path="/clients" component={Clients} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default Navigation;
