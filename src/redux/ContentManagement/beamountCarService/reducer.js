import { BeamountCarServiceActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BeamountCarServiceActionTypes.FETCH_BEAMOUNT_CAR_SERVICE:
            return { ...state, loading: false, data: action.payload }
        case BeamountCarServiceActionTypes.FETCH_BEAMOUNT_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case BeamountCarServiceActionTypes.UPDATE_BEAMOUNT_CAR_SERVICE:
            return { ...state, loading: true, updated: action.payload }
        case BeamountCarServiceActionTypes.UPDATE_BEAMOUNT_CAR_SERVICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case BeamountCarServiceActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
