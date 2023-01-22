import * as api from '../../../api'
import { PartyActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: PartyActionTypes.CLEAR_ERROR })
}

// get Party
export const getParty = () => async (dispatch) => {
    try {
        const { data } = await api.fetchParty()
        dispatch({ type: PartyActionTypes.FETCH_PARTY , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: PartyActionTypes.FETCH_PARTY_ERROR , payload: error })
    }
}

// update Party
export const updateParty = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateParty(updatedData)
        dispatch({ type: PartyActionTypes.UPDATE_PARTY , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: PartyActionTypes.UPDATE_PARTY_ERROR , payload: error })
    }
}
