import { GraduationTransferActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GraduationTransferActionTypes.FETCH_GRADUATION_TRANSFER:
            return { ...state, loading: false, data: action.payload }
        case GraduationTransferActionTypes.FETCH_GRADUATION_TRANSFER_ERROR:
            return { ...state, loading: false, error: action.payload }
        case GraduationTransferActionTypes.UPDATE_GRADUATION_TRANSFER:
            return { ...state, loading: true, updated: action.payload }
        case GraduationTransferActionTypes.UPDATE_GRADUATION_TRANSFER_ERROR:
            return { ...state, loading: false, error: action.payload }
        case GraduationTransferActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
