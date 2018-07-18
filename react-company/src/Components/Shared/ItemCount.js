import React from 'react';

const ItemCount = ({ total, filtered }) => (

    <p className="content">
        Showing&nbsp;
                    <span className="md-font-bold">
            {filtered}&nbsp;
                    </span>
        products - Hidden:&nbsp;
                    <span className="md-font-bold">
            {total - filtered}
        </span>
    </p>
);

export default ItemCount;