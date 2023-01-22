import * as api from '../../api'
import { UpdateContactDetailsActionTypes } from './types'

// action creators

// loading
export const loadUpdateContactDetails = () => async (dispatch) => {
        dispatch({ type: UpdateContactDetailsActionTypes.UPDATE_CONTACT_DETAILS_LOADING  })
}

// update
export const updateContactDetails = (updatedContactDetails) => async (dispatch) => {
    try {
        const { data } = await api.updateContactDetails(updatedContactDetails)

        dispatch({ type: UpdateContactDetailsActionTypes.UPDATE_CONTACT_DETAILS , payload: data })
    } catch (error) {
        console.log(error);
    }
}