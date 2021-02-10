import React, {useEffect, useState} from "react";
import {Grid, CircularProgress, Typography, makeStyles} from "@material-ui/core";
import HeaderBar from "../HeaderBar/HeaderBar";
import DateElement from "../../components/DateElement/DateElement";
import {useDispatch, useSelector} from "react-redux";
import {getDayEvents, removeEvent} from "../../reducers/events/eventsActions";
import EventsList from "../../components/EventsList/EventsList";

const useStyles = makeStyles({
    center: {
        textAlign: "center"
    }
})

const EventDays = () => {
    const [date, changeDate] = useState(new Date())
    const {events, loading} = useSelector(state => state.events)
    const classes = useStyles()
    const dispatch = useDispatch()
    const onRemove = (eventID) => dispatch(removeEvent(eventID))
    useEffect(() => {
        dispatch(getDayEvents(new Date(date).toJSON()))
    }, [date, dispatch])
    return (
        <>
            <HeaderBar/>
            <Grid container justify={"center"} spacing={2}>
                <Grid item>
                    <DateElement changeDate={changeDate} date={date}/>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify={"center"}>
                        <Grid xs={6} className={classes.center}>
                            {
                                loading ?
                                    <CircularProgress color={"inherit"}/> : events.length ?
                                    <EventsList onRemove={onRemove} events={events}/> :
                                    <Typography
                                        align={"center"}
                                        variant={"h6"}>In this date no events!</Typography>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default EventDays;
