import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'react-md';

const Item = ({ children }) => (
    <Paper className="md-cell md-cell--12 md-grid card">
        <section className="md-cell md-cell--12 md-text-left">
            <h1>title</h1>
            <h4>subtitle</h4>
        </section>
        <section className="md-cell md-cell--3-tablet md-cell--4-desktop">
            {children}
        </section>
        <section className="md-cell md-cell--5-tablet md-cell--8-desktop md-text-left">
            <p>content content content contentcontent contentcontentcontentcontent</p>
            <p ><span className="md-font-bold">Stock:</span>999999</p>
            <p ><span className="md-font-bold">Price:</span>654987</p>
        </section>
    </Paper>
);

Item.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Item;