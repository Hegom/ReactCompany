import React, { Component } from 'react';
import { NavigationDrawer } from 'react-md';
import Header from '../Header'
import Navigation from '../Navigation'
import './style.css';

class App extends Component { 
  render() {
    return (     
      <NavigationDrawer
        drawerTitle="Categories"
        toolbarTitle="Welcome to react-md"
      >
        <div className="App">          
          <Header />    
          <Navigation />     
        </div>
      </NavigationDrawer>
    );
  }
}

export default App;
