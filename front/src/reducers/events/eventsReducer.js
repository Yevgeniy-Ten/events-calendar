import {
    CREATE_EVENT,
    CREATE_EVENT_ERROR,
    CREATE_EVENT_SUCCESS,
    GET_EVENTS,
    GET_EVENTS_ERROR,
    GET_EVENTS_SUCCESS, REMOVE_EVENT, REMOVE_EVENT_ERROR, REMOVE_EVENT_SUCCESS,
} from "./eventsTypes";

const initialState = {
    events: [],
    errors: null,
    loading: false,
    isCreated: false,
    friendsEvents: []
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
            return {...initialState, events: action.payload.events, friendsEvents: action.payload.friendsEvents}
        case GET_EVENTS_ERROR:
            return {...initialState}
        case REMOVE_EVENT:
            return {...state, loading: true}
        case REMOVE_EVENT_ERROR:
            return {...state, loading: false}
        case REMOVE_EVENT_SUCCESS: {
            return {
                ...state, events: state.events.filter(e => e._id !== action.payload), loading: false
            }
        }
        default:
            return state
    }
}

export default eventsReducer