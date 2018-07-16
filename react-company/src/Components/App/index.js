import React, { Component } from 'react';
import { NavigationDrawer } from 'react-md';
import Navigation from '../Navigation'
import NavItemLink from '../Navigation/navItemLink';
import Links from '../Navigation/links'
import './style.css';

const navItems = [{
  label: 'All',
  to: '/products',
  exact: true,
  icon: 'list',
}, {
  divider: true,
  to: '/',
}, {
  label: 'Tech',
  to: `/products/tech`,
  icon: 'computer',
}, {
  label: 'Services',
  to: `/products/services`,
  icon: 'build',
}, {
  label: 'Office',
  to: `/products/office`,
  icon: 'folder',
}];

class App extends Component {
  render() {
    return (
      <div>
        <NavigationDrawer
          drawerTitle="Categories"
          toolbarTitle=" "
          toolbarChildren={<Links />}
          too
          navItems={navItems.map(props => <NavItemLink {...props} key={props.to} />)}
        >
          <div className="App">
            <Navigation />
          </div>
        </NavigationDrawer>
      </div>
    );
  }
}

export default App;