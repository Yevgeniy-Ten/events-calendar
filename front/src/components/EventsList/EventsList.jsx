import React from "react";
import EventsItem from "./EventsItem/EventsItem";
import {List} from "@material-ui/core"

const EventsList = ({events, onRemove}) => {
    return (
        <List>
            {events.map((event, i) => <EventsItem key={event._id}
                                                  onRemove={onRemove.bind(null, event._id)}
                                                  createdDate={event.createdDate}
                                                  duration={event.duration}
                                                  name={event.name}/>)}
        </List>
    );
};

export default EventsList;
