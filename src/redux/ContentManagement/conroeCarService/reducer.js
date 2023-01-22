import { ConroeCarServiceActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ConroeCarServiceActionTypes.FETCH_CONROE_CAR_SERVICE:
            return { ...state, loading: false, data: action.payload }
        case ConroeCarServiceActionTypes.FETCH_CONROE_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ConroeCarServiceActionTypes.UPDATE_CONROE_CAR_SERVICE:
            return { ...state, loading: true, updated: action.payload }
        case ConroeCarServiceActionTypes.UPDATE_CONROE_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ConroeCarServiceActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
