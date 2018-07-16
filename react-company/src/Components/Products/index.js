import React, { Component } from 'react';
import './style.css';

class Products extends Component {
  render() {
    return (
      <div>
        Hi from products... <h3>{this.props.match.params.category}</h3>
      </div>
    );
  }
}

export default Products;
