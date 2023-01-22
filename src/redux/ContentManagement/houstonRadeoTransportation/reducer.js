import { HoustonRadeoActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HoustonRadeoActionTypes.FETCH_HOUSTON_RADEO:
            return { ...state, loading: false, data: action.payload }
        case HoustonRadeoActionTypes.FETCH_HOUSTON_RADEO_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonRadeoActionTypes.UPDATE_HOUSTON_RADEO:
            return { ...state, loading: true, updated: action.payload }
        case HoustonRadeoActionTypes.UPDATE_HOUSTON_RADEO_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonRadeoActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
