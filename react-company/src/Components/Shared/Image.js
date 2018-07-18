import React from 'react';
import { Media } from 'react-md';

const Image = ({ src, alt }) => (

    <Media aspectRatio="1-1" className="fixedImg">
        <img src={src} alt={alt} />
    </Media>
);

export default Image;