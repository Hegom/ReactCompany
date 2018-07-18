import React, { Component } from 'react';
import ItemList from './ItemList';

class ItemListContainer extends Component {
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
                    return product.categories.toString().toLowerCase().indexOf(filter) !== -1;
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
            let filteredData = this.filterData(data, filters);
            return (
                <ItemList data={filteredData} originalDataLength={dataLength} />
            );
        } else {
            return <div className="content">No items found</div>;
        }
    }

    renderLoading() {
        return <div className="content">Loading...</div>;
    }    
}

export default ItemListContainer;