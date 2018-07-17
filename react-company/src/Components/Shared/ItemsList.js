import React from 'react';
import { GridList, Card, Media } from 'react-md';
import data from '../../Static/r8yTaSYN.json';
import ItemContainer from '../Shared/ItemContainer'


const ItemsList = () => (
    <GridList container="Media" size={1} component="section">
        {data.map(({ id, photo }) => (
           <ItemContainer src = {photo} />
        ))}
    </GridList>
);

export default ItemsList;
