import {CREATE_EVENT, CREATE_EVENT_ERROR, CREATE_EVENT_SUCCESS} from "./eventsTypes";

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
        default:
            return state
    }
}

export default eventsReducer