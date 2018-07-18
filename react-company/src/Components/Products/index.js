import React, { Component } from 'react';
import ItemListContainer from '../Shared/ItemListContainer'

class Products extends Component {
  render() {    
    const { category } = this.props.match.params;
    return (
      <ItemListContainer filters={category} />
    );
  }  
}

export default Products;
