import {SpringCarServiceActionTypes} from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SpringCarServiceActionTypes.FETCH_Spring_CAR_SERVICE:
            return { ...state, loading: false, data: action.payload }
        case SpringCarServiceActionTypes.FETCH_Spring_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case SpringCarServiceActionTypes.UPDATE_Spring_CAR_SERVICE:
            return { ...state, loading: true, updated: action.payload }
        case SpringCarServiceActionTypes.UPDATE_Spring_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case SpringCarServiceActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
