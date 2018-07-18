import React, { Component } from 'react';
import { GridList } from 'react-md';
import Item from './Item'
import ItemCount from './ItemCount'

class ItemList extends Component {
    state = {
        data: void 0
    }

    componentDidMount() {
        fetch('/data.json')
            .then(res => res.json())
            .then(this.onLoad);
    }

    parseData(data) {
        return data;
    }

    onLoad = (data) => {
        this.setState({
            data: data
        });
    }

    render() {
        const { data } = this.state;

        return data ?
            this.renderData(data) :
            this.renderLoading();
    }

    filterData(data, filter){
        let filterdData;
        if (filter != null) {
            filterdData = data.filter(
                (product) => {
                    return product.categories.toString().toLowerCase().
                        indexOf(filter) !== -1;
                }
            );
        } 
        else { 
            filterdData = data; 
        }   

        return filterdData;
    }

    renderData(data) {       
        if (data && data.length > 0) {
            const { filters } = this.props;
            let dataLength = data.length;
            data = this.filterData(data, filters);
            let filteredDataLength = data.length;
            return (
                <div>
                    <ItemCount total={dataLength} filtered={filteredDataLength}/>
                    <GridList container="Media" size={1} component="section">
                        {
                            data.map(function (product) {
                                return <Item data={product} />;
                            })
                        }
                    </GridList>
                </div>
            );
        } else {
            return <div>No items found</div>;
        }
    }

    renderLoading() {
        return <div>Loading...</div>;
    }    
}

export default ItemList;