import React from "react";
import {Button, Grid, Link} from "@material-ui/core";
import FormElement from "../FormElement/FormElement";
import {Link as RouterLink} from "react-router-dom";
import FacebookSign from "../../containers/FacebookSign/FacebookSign";

const LoginForm = ({loading, onSubmit, binder}) => {
    return (
        <form autoComplete={"off"} onSubmit={onSubmit} noValidate>
            <Grid spacing={2} container>
                <FormElement {...binder.email} required={true} label={"Your email"}/>
                <FormElement {...binder.password} type={"password"} required={true} label={"Your password"}/>
                <Grid item xs={12}>
                    <Button disabled={loading}
                            variant={"contained"} fullWidth type={"submit"} color={"default"}>Login</Button>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify={"flex-end"} spacing={2}>
                        <Grid item>
                            <Link disabled={loading} to={"/"} color={"inherit"} component={RouterLink}
                                  variant={"body1"}>
                                No account? Sign up
                            </Link>
                        </Grid>
                        <Grid item>
                            <FacebookSign loading={loading}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};

export default LoginForm;
