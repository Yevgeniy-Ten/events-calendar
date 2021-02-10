import React from "react";
import SecurityRoute from "../components/SecurityRoute/SecurityRoute";
import {Switch, Redirect} from "react-router-dom";
import Register from "../containers/Register/Register";
import Login from "../containers/Login/Login";
import {useSelector} from "react-redux";
import EventDays from "../containers/EventDays/EventDays";
import EventCreate from "../containers/EventCreate/EventCreate";

const Routes = () => {
    const user = useSelector(state => state.auth.user)
    return (
        <Switch>
            <SecurityRoute path={"/"} exact isAllowed={user} redirectTo={"/auth"} component={EventDays}/>
            <SecurityRoute path={"/event/creator"} exact isAllowed={user}
                           redirectTo={"/auth"} component={EventCreate}/>
            <SecurityRoute path={"/auth"} exact isAllowed={!user} redirectTo={"/"} component={Register}/>
            <SecurityRoute path={"/auth/login"} exact isAllowed={!user} redirectTo={"/"} component={Login}/>
            <Redirect to={"/"}/>
        </Switch>
    );
};

export default Routes;

