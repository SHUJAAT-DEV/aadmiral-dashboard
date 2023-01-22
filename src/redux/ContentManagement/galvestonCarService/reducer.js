import { GalvestonCarServiceActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GalvestonCarServiceActionTypes.FETCH_GALVESTON_CAR_SERVICE:
            return { ...state, loading: false, data: action.payload }
        case GalvestonCarServiceActionTypes.FETCH_GALVESTON_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case GalvestonCarServiceActionTypes.UPDATE_GALVESTON_CAR_SERVICE:
            return { ...state, loading: true, updated: action.payload }
        case GalvestonCarServiceActionTypes.UPDATE_GALVESTON_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case GalvestonCarServiceActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
