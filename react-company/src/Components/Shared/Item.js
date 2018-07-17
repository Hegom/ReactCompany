import React from 'react';
import { Paper, Media  } from 'react-md';

class Item extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { name, brand, photo, description, stock, price } = this.props.data;
        return (
            <Paper className="md-cell md-cell--12 md-grid card">
                <section className="md-cell md-cell--12 md-text-left">
                    <h1>{name}</h1>
                    <h4>{brand}</h4>
                </section>
                <section className="md-cell md-cell--3-tablet md-cell--4-desktop">
                    <Media aspectRatio="1-1">
                        <img src={photo} alt="Something from unsplash.it" />
                    </Media>
                </section>
                <section className="md-cell md-cell--5-tablet md-cell--8-desktop md-text-left">
                    <p>{description}</p>
                    <p ><span className="md-font-bold">Stock:</span>{stock}</p>
                    <p ><span className="md-font-bold">Price:</span>{price}</p>
                </section>
            </Paper>
        );
    }
}

export default Item;