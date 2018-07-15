import React, { Component } from 'react';
import {NavigationDrawer} from 'react-md'
import Header from '../Header'
import Products from '../Products'
import './style.css';

class App extends Component {
  render() {
    return (
      <NavigationDrawer
        drawerTitle="react-md with CRA"
        toolbarTitle="Welcome to react-md"
      >
        <div className="App">          
          <Header/>         
          <Products/>
        </div>
      </NavigationDrawer>
    );
  }
}

export default App;
