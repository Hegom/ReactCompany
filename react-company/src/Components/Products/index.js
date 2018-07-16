import React, { Component } from 'react';
import data from '../../Static/r8yTaSYN.json';
import './style.css';

class Products extends Component {
  render() {
    return (
      <div>
        <div>
          Hi from products... <h3>{this.props.match.params.category}</h3>
        </div>

        <ul>
          {
            data.map(function (product) {
              return <li>
              {product.name} <br/> 
              {product.brand} <br/> 
              {product.photo} <br/> 
              {product.description} <br/>
              {product.stock} <br/>
              {product.price} <br/>
              <br/><br/><br/>
              </li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default Products;
