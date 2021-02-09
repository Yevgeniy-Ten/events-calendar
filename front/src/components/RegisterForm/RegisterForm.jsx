import React from "react";
import {Grid, Button, Link} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom"
import FormElement from "../FormElement/FormElement";
import FacebookSign from "../../containers/FacebookSign/FacebookSign";
import {getFieldError} from "../../helpers/helpers";

const RegisterForm = ({loading, onSubmit, binder, errors}) => {
    return (
        <form autoComplete={"off"} onSubmit={onSubmit} noValidate>
            <Grid spacing={2} container>
                <FormElement error={getFieldError(errors, "email")}
                             {...binder.email} required={true}
                             label={"Your email"}/>
                <FormElement error={getFieldError(errors, "name")}
                             {...binder.name} required={true}
                             label={"Your name"}/>
                <FormElement error={getFieldError(errors, "password")}
                             {...binder.password} type={"password"}
                             required={true} label={"Your password"}/>
                <Grid item xs={12}>
                    <Button disabled={loading}
                            variant={"contained"}
                            type={"submit"} color={"default"}>Register</Button>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify={"flex-end"} spacing={2}>
                        <Grid item>
                            <Link disabled={loading} to={"/auth/login"} color={"inherit"} component={RouterLink}
                                  variant={"body1"}>
                                Already have an account? Sign in
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

export default RegisterForm;
