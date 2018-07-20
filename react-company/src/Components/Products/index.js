import React, { Component } from 'react';
import ProductListContainer from './ProductListContainer'

class Products extends Component {
  render() {
    const { category } = this.props.match.params;
    return (
      <ProductListContainer filters={category} />
    );
  }
}

export default Products;
