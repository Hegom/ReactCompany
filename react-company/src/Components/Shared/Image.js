import React from 'react';
import { Media } from 'react-md';

const Image = ({ src, alt }) => (
    <Media className="media">
        <img src={src} alt={alt} />
    </Media>
);

export default Image;