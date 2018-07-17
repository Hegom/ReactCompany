import React from 'react';
import { GridList } from 'react-md';
import Item from '../Shared/Item'

class ItemsList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let filterdData;
        if (this.props.category != null) {
            filterdData = this.props.data.filter(
                (product) => {
                    return product.categories.toString().toLowerCase().
                        indexOf(this.props.category) !== -1;
                }
            );
        }
        else{
            filterdData = this.props.data;
        }
        return (
            <div>
            <p className="content">Showing <span className="md-font-bold">{filterdData.length}</span> products - Hidden <span className="md-font-bold">{this.props.data.length - filterdData.length}</span></p>
            <GridList container="Media" size={1} component="section">
            
                {
                    filterdData.map(function (product) {
                        return <Item data={product}/>;
                    })
                }
            </GridList>
            </div>
        );
    }
}

export default ItemsList;
