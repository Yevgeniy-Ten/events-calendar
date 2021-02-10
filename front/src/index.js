import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import {Provider as Redux} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";
import store from "./store/store";

ReactDOM.render(
    <Redux store={store}>
        <BrowserRouter>
            <MuiPickersUtilsProvider utils={LuxonUtils}>
                <CssBaseline/>
                <App/>
            </MuiPickersUtilsProvider>
        </BrowserRouter>
    </Redux>,
    document.getElementById("root")
);
