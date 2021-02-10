import React from "react";
import {Button, Grid} from "@material-ui/core";
import FormElement from "../FormElement/FormElement";
import DateElement from "../DateElement/DateElement";
import {getFieldError} from "../../helpers/helpers";

const EventCreateForm = ({loading, binder, onSubmit, selectedDate, handleDateChange, errors}) => {

    return (
        <form autoComplete={"off"} onSubmit={onSubmit} noValidate>
            <Grid spacing={2} container>
                <FormElement {...binder.name} required={true}
                             error={getFieldError(errors, "name")}
                             label={"Event name"}/>
                <FormElement {...binder.duration}
                             error={getFieldError(errors, "duration")}
                             required={true} label={"Event duration"}/>
                <Grid item xs={12}>
                    <DateElement type={"time"} date={selectedDate} changeDate={handleDateChange}/>
                </Grid>
                <Grid item xs={12}>
                    <Button disabled={loading}
                            variant={"contained"} fullWidth type={"submit"} color={"default"}>Create</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default EventCreateForm;
