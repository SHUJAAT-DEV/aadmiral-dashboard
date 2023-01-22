import { HoustonCarServiceActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HoustonCarServiceActionTypes.FETCH_HOUSTON_CAR_SERVICE:
            return { ...state, loading: false, data: action.payload }
        case HoustonCarServiceActionTypes.FETCH_HOUSTON_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonCarServiceActionTypes.UPDATE_HOUSTON_CAR_SERVICE:
            return { ...state, loading: true, updated: action.payload }
        case HoustonCarServiceActionTypes.UPDATE_HOUSTON_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonCarServiceActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
