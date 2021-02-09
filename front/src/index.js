import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import {Provider as Redux} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import store from "./store/store";

ReactDOM.render(
    <Redux store={store}>
        <BrowserRouter>
            <CssBaseline/>
            <App/>
        </BrowserRouter>
    </Redux>,
    document.getElementById("root")
);
