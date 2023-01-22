import { HoustonToSantonioActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HoustonToSantonioActionTypes.FETCH_HOUSTON_TO_SANTONIO:
            return { ...state, loading: false, data: action.payload }
        case HoustonToSantonioActionTypes.FETCH_HOUSTON_TO_SANTONIO_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonToSantonioActionTypes.UPDATE_HOUSTON_TO_SANTONIO:
            return { ...state, loading: true, updated: action.payload }
        case HoustonToSantonioActionTypes.UPDATE_HOUSTON_TO_SANTONIO_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonToSantonioActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
