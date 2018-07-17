import React from 'react';
import { Media } from 'react-md';
import Item from './Item';

const ItemContainer = (props) => (
  <Item>
    <Media aspectRatio="1-1">
      <img src={props.src} alt="Something from unsplash.it" />
    </Media>
  </Item>
);

export default ItemContainer;