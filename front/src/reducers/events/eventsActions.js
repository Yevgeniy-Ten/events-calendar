import {GET_EVENTS_FROM_DAY, REMOVE_EVENT, REMOVE_EVENT_ERROR, REMOVE_EVENT_SUCCESS} from "./eventsTypes";
import {axiosInstance as axios} from "../../store/store";

export const axiosRemoveEvent = (eventID) => axios.delete(`/events/${eventID}`)
export const getDayEventsFromDate = (day) => {
    return {
        type: GET_EVENTS_FROM_DAY,
        payload: day
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