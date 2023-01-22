import { SugarlandCarServiceActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SugarlandCarServiceActionTypes.FETCH_SUGARLAND_CAR_SERVICE:
            return { ...state, loading: false, data: action.payload }
        case SugarlandCarServiceActionTypes.FETCH_SUGARLAND_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case SugarlandCarServiceActionTypes.UPDATE_SUGARLAND_CAR_SERVICE:
            return { ...state, loading: true, updated: action.payload }
        case SugarlandCarServiceActionTypes.UPDATE_SUGARLAND_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case SugarlandCarServiceActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
