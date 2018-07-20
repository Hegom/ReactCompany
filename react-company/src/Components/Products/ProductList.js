import React, { Component, Fragment } from 'react';
import { GridList } from 'react-md';
import Product from './Product'
import ItemCount from '../Shared/ItemCount'

class ProductList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { data, originalDataLength, objectName } = this.props;
        return (
            <Fragment>
                <ItemCount total={originalDataLength} filtered={data.length} name={objectName} />
                <GridList container="Media" size={1} component="section">
                    {
                        data.map(function (item) {
                            return <Product key={item.id} data={item} />;
                        })
                    }
                </GridList>
            </Fragment>
        );
    }
}

ProductList.defaultProps = {
    objectName: 'products'
};

export default ProductList;