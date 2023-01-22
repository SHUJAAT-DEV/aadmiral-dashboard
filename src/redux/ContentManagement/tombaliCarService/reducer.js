import { TombaliCarServiceActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TombaliCarServiceActionTypes.FETCH_TOMBALI_CAR_SERVICE:
            return { ...state, loading: false, data: action.payload }
        case TombaliCarServiceActionTypes.FETCH_TOMBALI_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case TombaliCarServiceActionTypes.UPDATE_TOMBALI_CAR_SERVICE:
            return { ...state, loading: true, updated: action.payload }
        case TombaliCarServiceActionTypes.UPDATE_TOMBALI_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case TombaliCarServiceActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
