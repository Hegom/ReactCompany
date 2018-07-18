import React, { Component } from 'react';
import ItemList from '../Shared/ItemList'

class Products extends Component {
  render() {    
    const { category } = this.props.match.params;
    return (
      <ItemList filters={category} />
    );
  }  
}

export default Products;
