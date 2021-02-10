import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import FormElement from "../FormElement/FormElement";

const SharedWithForm = ({binder, onSubmit, isCreated, errors}) => {
    return (
        <form onSubmit={onSubmit}>
            <Grid container spacing={1} justify={"center"}>
                <Grid item>
                    {errors && errors.msg ? <Typography
                            variant={"h6"} color={"secondary"}>{errors.msg}</Typography> :
                        <Typography color={"inherit"} variant={"h6"}>
                            {isCreated ? "Your success add friend" : "Share with:"}
                        </Typography>}
                </Grid>
                <FormElement {...binder.email} type={"email"} label={"Friend email"}/>
                <Grid item xs={12}>
                    <Button type={"submit"} variant={"contained"} fullWidth>+</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default SharedWithForm;
