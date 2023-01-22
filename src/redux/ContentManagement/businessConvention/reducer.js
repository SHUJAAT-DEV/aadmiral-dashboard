import { BusinessConventionActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BusinessConventionActionTypes.FETCH_BUSINESS_CONVENTION:
            return { ...state, loading: false, data: action.payload }
        case BusinessConventionActionTypes.FETCH_BUSINESS_CONVENTION_ERROR:
            return { ...state, loading: false, error: action.payload }
        case BusinessConventionActionTypes.UPDATE_BUSINESS_CONVENTION:
            return { ...state, loading: true, updated: action.payload }
        case BusinessConventionActionTypes.UPDATE_BUSINESS_CONVENTION_ERROR:
            return { ...state, loading: false, error: action.payload }
        case BusinessConventionActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
