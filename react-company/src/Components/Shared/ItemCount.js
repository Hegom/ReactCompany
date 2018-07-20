import React, { Fragment } from 'react';

const ItemCount = ({ total, filtered, name }) => (

    <p className="content">
        <span> Showing </span>
        <span className="md-font-bold">
            {filtered}&nbsp;
        </span>
        {name}
        {total !== filtered &&
            <Fragment>
                <span> - Hidden: </span>
                <span className="md-font-bold">
                    {total - filtered}
                </span>
            </Fragment>
        }
    </p>
);

export default ItemCount;