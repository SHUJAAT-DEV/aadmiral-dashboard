import { BachelorPartyActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BachelorPartyActionTypes.FETCH_BACHELOR_PARTY:
            return { ...state, loading: false, data: action.payload }
        case BachelorPartyActionTypes.FETCH_BACHELOR_PARTY_ERROR:
            return { ...state, loading: false, error: action.payload }
        case BachelorPartyActionTypes.UPDATE_BACHELOR_PARTY:
            return { ...state, loading: true, updated: action.payload }
        case BachelorPartyActionTypes.UPDATE_BACHELOR_PARTY_ERROR:
            return { ...state, loading: false, error: action.payload }
        case BachelorPartyActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
