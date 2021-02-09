import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"
import {Link} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {facebookSing} from "../../reducers/auth/authActions";

const FACEBOOK_APP = 336631404238833
const FacebookSign = ({loading}) => {
    const dispatch = useDispatch()
    const onFacebookSign = (response) => {
        if (response.id) {
            dispatch(facebookSing(response))
        }
    }
    return (
        <FacebookLogin appId={FACEBOOK_APP}
                       fields={"name,email"}
                       callback={onFacebookSign}
                       render={props =>
                           (<Link color={"inherit"}
                                  disabled={loading}
                                  component={"button"}
                                  variant={"body1"}
                                  onClick={props.onClick}>Sing in facebook</Link>)}/>
    );
};

export default FacebookSign;
