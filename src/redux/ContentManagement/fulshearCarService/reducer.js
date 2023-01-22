import {FulshearCarServiceActionTypes} from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FulshearCarServiceActionTypes.FETCH_Fulshear_CAR_SERVICE:
            return { ...state, loading: false, data: action.payload }
        case FulshearCarServiceActionTypes.FETCH_Fulshear_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case FulshearCarServiceActionTypes.UPDATE_Fulshear_CAR_SERVICE:
            return { ...state, loading: true, updated: action.payload }
        case FulshearCarServiceActionTypes.UPDATE_Fulshear_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case FulshearCarServiceActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
