import React, { Component } from 'react';
import data from '../../Static/r8yTaSYN.json';
import ItemsList from '../Shared/ItemsList'
import './style.css';

class Products extends Component {
  render() {
    return (
      <div>
        <div>
          Hi from products... <h3>{this.props.match.params.category}</h3>
        </div>       
        <ItemsList/>
      </div>
    );
  }
}

export default Products;
