import * as api from '../../../api'
import { BachelorPartyActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: BachelorPartyActionTypes.CLEAR_ERROR })
}

// get Bachelor party
export const getBachelorParty = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBachelorParty()
        dispatch({ type: BachelorPartyActionTypes.FETCH_BACHELOR_PARTY , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: BachelorPartyActionTypes.FETCH_BACHELOR_PARTY_ERROR , payload: error })
    }
}

// update BachelorParty
export const updateBachelorParty = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateBachelorParty(updatedData)
        dispatch({ type: BachelorPartyActionTypes.UPDATE_BACHELOR_PARTY , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: BachelorPartyActionTypes.UPDATE_BACHELOR_PARTY_ERROR , payload: error })
    }
}
