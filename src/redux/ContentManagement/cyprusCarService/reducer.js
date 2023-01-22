import { CyprusCarServiceActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CyprusCarServiceActionTypes.FETCH_CYPRUS_CAR_SERVICE:
            return { ...state, loading: false, data: action.payload }
        case CyprusCarServiceActionTypes.FETCH_CYPRUS_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case CyprusCarServiceActionTypes.UPDATE_CYPRUS_CAR_SERVICE:
            return { ...state, loading: true, updated: action.payload }
        case CyprusCarServiceActionTypes.UPDATE_CYPRUS_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case CyprusCarServiceActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
