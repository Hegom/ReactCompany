import React from 'react';
import { Link } from "react-router-dom";

const ToolbarLinks = () => (
    <ul className="md-font-bold">
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
)

export default ToolbarLinks;
