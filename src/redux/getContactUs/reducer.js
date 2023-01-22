import { ContactUsActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ContactUsActionTypes.FETCH_CONTACT_US_LOADING:
            return { ...state, loading: true, data: {}, }
        case ContactUsActionTypes.FETCH_CONTACT_US:
            return { ...state, loading: false, data: action.payload }
        case ContactUsActionTypes.DELETE_MESSAGE_LOADING:
            return { ...state, loading: true, data: action.payload }
        case ContactUsActionTypes.DELETE_MESSAGE:
            return { ...state, loading: true, data: action.payload }
        default:
            return state
    }
}
