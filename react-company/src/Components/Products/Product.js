import React from 'react';
import { Paper } from 'react-md';
import Image from '../Shared/Image'

class Product extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {name, brand, photo, description, stock, price, categories } = this.props.data;
        const categoriesSplitted = categories.toString().split(/(?=[A-Z])/).join(" ");
        return (
            <Paper className="md-cell md-cell--12 md-grid card">
                <section className="md-cell md-cell--12 md-text-left">
                    <h2>{name}</h2>
                    <p className="grey-text md-font-medium">{categoriesSplitted} - {brand}</p>
                </section>
                <section className="md-cell md-cell--3-tablet md-cell--4-desktop">
                    <Image src={photo} alt={name} name="products" />
                </section>
                <section className="md-cell md-cell--5-tablet md-cell--8-desktop md-text-left">
                    <p>{description}</p>
                    <p ><span className="md-font-bold">Stock: </span><span className="md-font-medium">{stock} </span></p>
                    <p ><span className="md-font-bold">Price: </span><span className="md-font-medium">${price} </span></p>
                </section>
            </Paper>
        );
    }
}

export default Product;