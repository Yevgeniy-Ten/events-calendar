import React, {useEffect, useState} from "react";
import {Grid, Button, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import useForm from "../../hooks/useForm";
import {createEvent} from "../../reducers/events/eventsActions";
import EventCreateForm from "../../components/EventCreateForm/EventCreateForm";

const useStyles = makeStyles(theme => ({
    mt: {
        marginTop: theme.spacing(2)
    },
    height: {
        minHeight: "60vh"
    },
}))
const EventCreate = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const {loading, errors, isCreated} = useSelector(state => state.events)
    const [selectedDate, handleDateChange] = useState(new Date());
    const {values, binder, clearForm} = useForm({
        duration: "",
        name: ""
    })
    const onSubmitHandler = (e) => {
        e.preventDefault()
        values.date = selectedDate
        dispatch(createEvent(values))
    }
    useEffect(() => {
        if (isCreated) {
            clearForm()
            handleDateChange(new Date())
        }
    }, [isCreated, clearForm])
    return (
        <Grid container spacing={2}>
            <Grid item className={classes.mt} xs={12}>
                <Button variant={"contained"} to={"/"} component={Link} color={"default"}>Back</Button>
            </Grid>
            {isCreated && <Grid item xs={12}>
                <Typography align={"center"} variant={"h5"}>Created success!</Typography>
            </Grid>}
            <Grid item xs={12}>
                <Grid container className={classes.height} alignItems={"center"} justify={"center"}>
                    <Grid item xs={6}>
                        <EventCreateForm selectedDate={selectedDate}
                                         handleDateChange={handleDateChange}
                                         onSubmit={onSubmitHandler}
                                         errors={errors} loading={loading} binder={binder}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default EventCreate;
