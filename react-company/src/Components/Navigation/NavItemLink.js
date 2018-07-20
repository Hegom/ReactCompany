import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontIcon, ListItem, Divider } from 'react-md';

class NavItemLink extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { label, to, icon, divider } = this.props;

    let leftIcon;
    if (divider) {
      return (<Divider />)
    }
    if (label) {
      leftIcon = <FontIcon>{icon}</FontIcon>;
    }
    return (
      <ListItem
        component={Link}
        to={to}
        primaryText={label}
        leftIcon={leftIcon}
      />
    );
  }
}

NavItemLink.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.node,
};

export default NavItemLink;