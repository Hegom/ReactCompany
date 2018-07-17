import React from 'react';
import { GridList } from 'react-md';
import Item from '../Shared/Item'

class ItemsList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GridList container="Media" size={1} component="section">
                {
                    this.props.data.map(function (product) {
                        return <Item data={product}/>;
                    })
                }
            </GridList>
        );
    }
}

export default ItemsList;
