import { UpdateContactDetailsActionTypes } from './types'

const INITIAL_STATE = {
    loading: false,
    updatedDetails: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UpdateContactDetailsActionTypes.UPDATE_CONTACT_DETAILS_LOADING:
            return { ...state, loading: true, updatedDetails: [] }
        case UpdateContactDetailsActionTypes.UPDATE_CONTACT_DETAILS:
            return { ...state, loading: false, updatedDetails: action.payload }
        default:
            return state
    }
}