import { GeorgeBushActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GeorgeBushActionTypes.FETCH_GEORGE_BUSH:
            return { ...state, loading: false, data: action.payload }
        case GeorgeBushActionTypes.FETCH_GEORGE_BUSH_ERROR:
            return { ...state, loading: false, error: action.payload }
        case GeorgeBushActionTypes.UPDATE_GEORGE_BUSH:
            return { ...state, loading: true, updated: action.payload }
        case GeorgeBushActionTypes.UPDATE_GEORGE_BUSH_ERROR:
            return { ...state, loading: false, error: action.payload }
        case GeorgeBushActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
