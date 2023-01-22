import { MontgomeryCarServiceActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MontgomeryCarServiceActionTypes.FETCH_MONTGOMERY_CAR_SERVICE:
            return { ...state, loading: false, data: action.payload }
        case MontgomeryCarServiceActionTypes.FETCH_MONTGOMERY_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case MontgomeryCarServiceActionTypes.UPDATE_MONTGOMERY_CAR_SERVICE:
            return { ...state, loading: true, updated: action.payload }
        case MontgomeryCarServiceActionTypes.UPDATE_MONTGOMERY_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case MontgomeryCarServiceActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
