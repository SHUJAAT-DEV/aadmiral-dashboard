import { PartyActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PartyActionTypes.FETCH_PARTY:
            return { ...state, loading: false, data: action.payload }
        case PartyActionTypes.FETCH_PARTY_ERROR:
            return { ...state, loading: false, error: action.payload }
        case PartyActionTypes.UPDATE_PARTY:
            return { ...state, loading: true, updated: action.payload }
        case PartyActionTypes.UPDATE_PARTY_ERROR:
            return { ...state, loading: false, error: action.payload }
        case PartyActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
