import * as api from '../../api'
import { ContactUsActionTypes } from './types'

// action creators
// loading
export const loadContactUs = () => (dispatch) => {
    dispatch({ type: ContactUsActionTypes.FETCH_CONTACT_US_LOADING })
}

export const getContactUs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchContactUs()
        dispatch({ type: ContactUsActionTypes.FETCH_CONTACT_US , payload: data })
    } catch (error) {
        console.log(error);
    }
}

// delete loading
export const loadDeleteContactUs = () => (dispatch) => {
    dispatch({ type: ContactUsActionTypes.DELETE_MESSAGE_LOADING })
}
// delete
export const deleteContactUs = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteContactUs(id)
        dispatch({ type: ContactUsActionTypes.DELETE_MESSAGE , payload: data })
    } catch (error) {
        console.log(error);
    }
}

