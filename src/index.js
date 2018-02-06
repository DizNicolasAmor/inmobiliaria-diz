import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import './styles/index.css';
import App from "./containers/App";
import store from "./store";

render(
    <Provider store={store}>
	    <App />
    </Provider>,
    window.document.getElementById('root'));