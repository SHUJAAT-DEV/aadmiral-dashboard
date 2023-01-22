import * as api from '../../api'
import { ContactDetailsActionTypes } from './types'

export const getContactDetails = () => async (dispatch) => {
    try {
        const { data } = await api.fetchContactDetails()
        dispatch({ type: ContactDetailsActionTypes.FETCH_CONTACT_DETAILS , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: ContactDetailsActionTypes.FETCH_CONTACT_DETAILS_ERROR , payload: error })
    }
}

export const updateContactDetails = (updatedData) => async (dispatch) => {
    try {
        dispatch({ type: ContactDetailsActionTypes.CLEAR_MESSAGE })
        const { data } = await api.updateContactDetails(updatedData)
        dispatch({ type: ContactDetailsActionTypes.UPDATE_CONTACT_DETAILS , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: ContactDetailsActionTypes.UPDATE_CONTACT_DETAILS_ERROR , payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => dispatch({ type: ContactDetailsActionTypes.CLEAR_MESSAGE })