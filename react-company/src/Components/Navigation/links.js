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
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/products">PRODUCTS</Link>
                </li>
                <li>
                    <Link to="/clients">CLIENTS</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
        );
    }
}

export default Links;
