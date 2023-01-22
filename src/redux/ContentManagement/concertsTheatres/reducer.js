import { ConcertsTheatresActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ConcertsTheatresActionTypes.FETCH_CONCERTS_THEATRES:
            return { ...state, loading: false, data: action.payload }
        case ConcertsTheatresActionTypes.FETCH_CONCERTS_THEATRES_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ConcertsTheatresActionTypes.UPDATE_CONCERTS_THEATRES:
            return { ...state, loading: true, updated: action.payload }
        case ConcertsTheatresActionTypes.UPDATE_CONCERTS_THEATRES_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ConcertsTheatresActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
