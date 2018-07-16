import React, { Component } from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import Products from '../Products'
import Clients from '../Clients'
import Contact from '../Contact'
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
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        );
    }
}

export default Links;
