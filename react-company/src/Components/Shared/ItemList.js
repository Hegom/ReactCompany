import React, { Component } from 'react';
import { GridList } from 'react-md';
import Item from './Item'
import ItemCount from './ItemCount'

class ItemList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { data, originalDataLength} = this.props;
        return (
            <div>
                <ItemCount total={originalDataLength} filtered={data.length} />
                <GridList container="Media" size={1} component="section">
                    {
                        data.map(function (product) {
                            return <Item key={product.id} data={product} />;
                        })
                    }
                </GridList>
            </div>
        );
    }
}

export default ItemList;