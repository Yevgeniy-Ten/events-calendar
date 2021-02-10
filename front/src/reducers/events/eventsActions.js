import {
    CREATE_EVENT,
    CREATE_EVENT_ERROR, CREATE_EVENT_SUCCESS, GET_EVENTS, GET_EVENTS_ERROR, GET_EVENTS_SUCCESS,
    REMOVE_EVENT,
    REMOVE_EVENT_ERROR,
    REMOVE_EVENT_SUCCESS, SHARE_EVENT, SHARE_EVENT_ERROR, SHARE_EVENT_SUCCESS
} from "./eventsTypes";
import {axiosInstance as axios} from "../../store/store";

export const axiosRemoveEvent = (eventID) => axios.delete(`/events/${eventID}`)
export const axiosCreateEvent = (event) => axios.post("/events", event)
export const axiosGetEvents = (date) => axios.get("/events", {
    params: {
        date,
    }
})
export const getDayEvents = (date) => {
    return {
        type: GET_EVENTS,
        payload: date
    }
}
export const getDayEventsSuccess = (events) => {
    return {
        type: GET_EVENTS_SUCCESS,
        payload: events
    }
}
export const getDayEventsError = () => {
    return {
        type: GET_EVENTS_ERROR,
    }
}
export const removeEvent = (id) => {
    return {
        type: REMOVE_EVENT,
        payload: id
    }
}
export const removeEventError = (error) => {
    return {
        type: REMOVE_EVENT_ERROR,
        payload: error
    }
}
export const removeEventSuccess = (id) => {
    return {
        type: REMOVE_EVENT_SUCCESS,
        payload: id
    }
}

export const createEvent = (event) => {
    return {
        type: CREATE_EVENT,
        payload: event
    }
}
export const createEventSuccess = () => {
    return {
        type: CREATE_EVENT_SUCCESS
    }
}
export const createEventError = (error) => {
    return {
        type: CREATE_EVENT_ERROR,
        payload: error
    }
}
