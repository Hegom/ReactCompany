import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import './style.scss';

class Links extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/clients">Clients</Link>
                </li>
                <li>
                    <Link to="/products">All</Link>
                </li>
                <li>
                    <Link to="/products/tech">Tech</Link>
                </li>
                <li>
                    <Link to="/products/services">Services</Link>
                </li>
                <li>
                    <Link to="/products/office">Office</Link>
                </li>
            </ul>
        );
    }
}

export default Links;
