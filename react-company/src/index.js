import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App'
import registerServiceWorker from './registerServiceWorker';
import WebFontLoader from 'webfontloader';
import { BrowserRouter as Router } from "react-router-dom";

WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons'],
    },
});

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
