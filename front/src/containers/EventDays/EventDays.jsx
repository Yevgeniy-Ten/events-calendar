import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import HeaderBar from "../HeaderBar/HeaderBar";
import DateElement from "../../components/DateElement/DateElement";
import {useDispatch, useSelector} from "react-redux";
import {getDayEventsFromDate, removeEvent} from "../../reducers/events/eventsActions";
import EventsList from "../../components/EventsList/EventsList";
import EventCreate from "../EventCreate/EventCreate";


const EventDays = () => {
    const [date, changeDate] = useState(new Date())
    // const {events} = useSelector(state => state.events)
    const dispatch = useDispatch()
    const onRemove = (eventID) => dispatch(removeEvent(eventID))
    useEffect(() => {
        dispatch(getDayEventsFromDate(date))
    }, [date, dispatch])
    const events = [{
        _id: "kek",
        name: "wqeqw",
        duration: 300,
        createdDate: new Date()
    },
        {
            _id: "kek",
            name: "wqeqw",
            duration: 300,
            createdDate: new Date()
        }, {
            _id: "kek",
            name: "wqeqw Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, molestias!",
            duration: 300,
            createdDate: new Date()
        }]
    return (
        <>
            <HeaderBar/>
            <Grid container justify={"center"} spacing={2}>
                <Grid item>
                    <DateElement changeDate={changeDate} date={date}/>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify={"center"}>
                        <Grid xs={6}>
                            <EventsList onRemove={onRemove} events={events}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default EventDays;
