import { HoustonToDallasActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HoustonToDallasActionTypes.FETCH_HOUSTON_TO_DALLAS:
            return { ...state, loading: false, data: action.payload }
        case HoustonToDallasActionTypes.FETCH_HOUSTON_TO_DALLAS_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonToDallasActionTypes.UPDATE_HOUSTON_TO_DALLAS:
            return { ...state, loading: true, updated: action.payload }
        case HoustonToDallasActionTypes.UPDATE_HOUSTON_TO_DALLAS_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonToDallasActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
