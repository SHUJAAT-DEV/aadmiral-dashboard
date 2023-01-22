import { HoustonAirportTransportationActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HoustonAirportTransportationActionTypes.FETCH_Houston_Airport_Transportation:
            return { ...state, loading: false, data: action.payload }
        case HoustonAirportTransportationActionTypes.FETCH_Houston_Airport_Transportation_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonAirportTransportationActionTypes.UPDATE_Houston_Airport_Transportation:
            return { ...state, loading: true, updated: action.payload }
        case HoustonAirportTransportationActionTypes.UPDATE_Houston_Airport_Transportation_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonAirportTransportationActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
