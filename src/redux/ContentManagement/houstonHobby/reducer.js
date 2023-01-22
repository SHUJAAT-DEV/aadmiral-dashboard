import { HoustonHobbyActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HoustonHobbyActionTypes.FETCH_HOUSTON_HOBBY:
            return { ...state, loading: false, data: action.payload }
        case HoustonHobbyActionTypes.FETCH_HOUSTON_HOBBY_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonHobbyActionTypes.UPDATE_HOUSTON_HOBBY:
            return { ...state, loading: true, updated: action.payload }
        case HoustonHobbyActionTypes.UPDATE_HOUSTON_HOBBY_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonHobbyActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
