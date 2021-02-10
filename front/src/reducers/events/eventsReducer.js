import {
    CREATE_EVENT,
    CREATE_EVENT_ERROR,
    CREATE_EVENT_SUCCESS,
    GET_EVENTS,
    GET_EVENTS_ERROR,
    GET_EVENTS_SUCCESS
} from "./eventsTypes";

const initialState = {
    events: [],
    errors: null,
    loading: false,
    isCreated: false
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EVENT:
            return {...initialState, loading: true}
        case CREATE_EVENT_ERROR:
            return {...initialState, errors: action.payload}
        case CREATE_EVENT_SUCCESS:
            return {...initialState, isCreated: true}
        case GET_EVENTS:
            return {...initialState, loading: true}
        case GET_EVENTS_SUCCESS:
            return {...initialState, events: action.payload}
        case GET_EVENTS_ERROR:
            return {...initialState}
        default:
            return state
    }
}

export default eventsReducer