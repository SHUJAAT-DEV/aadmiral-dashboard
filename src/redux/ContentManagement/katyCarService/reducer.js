import { KatyCarServiceActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case KatyCarServiceActionTypes.FETCH_KATY_CAR_SERVICE:
            return { ...state, loading: false, data: action.payload }
        case KatyCarServiceActionTypes.FETCH_KATY_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case KatyCarServiceActionTypes.UPDATE_KATY_CAR_SERVICE:
            return { ...state, loading: true, updated: action.payload }
        case KatyCarServiceActionTypes.UPDATE_KATY_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case KatyCarServiceActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
