import React from "react";
import SecurityRoute from "../components/SecurityRoute/SecurityRoute";
import {Switch} from "react-router-dom";
import Register from "../containers/Register/Register";
import Login from "../containers/Login/Login";
import {useSelector} from "react-redux";

const Routes = () => {
    const user = useSelector(state => state.auth.user)
    return (
        <Switch>
            <SecurityRoute path={"/"} exact isAllowed={!user} redirectTo={"/"} component={Register}/>
            <SecurityRoute path={"/auth/login"} exact isAllowed={!user} redirectTo={"/"} component={Login}/>
        </Switch>
    );
};

export default Routes;

