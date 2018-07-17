import React, { Component } from 'react';
import data from '../../Static/r8yTaSYN.json';
import ItemsList from '../Shared/ItemsList'

class Products extends Component {
  render() {
    const { category } = this.props.match.params;
    return (
      <ItemsList data={data} category={category} />
    );
  }
}

export default Products;
