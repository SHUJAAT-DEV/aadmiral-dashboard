import * as api from '../../../api'
import { PrivateJetActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: PrivateJetActionTypes.CLEAR_ERROR })
}

// get PRIVATE JET
export const getPrivateJet = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPrivateJet()
        dispatch({ type: PrivateJetActionTypes.FETCH_PRIVATE_JET , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: PrivateJetActionTypes.FETCH_PRIVATE_JET_ERROR , payload: error })
    }
}

// update PRIVATE JET
export const updatePrivateJet = (privateJet) => async (dispatch) => {
    try {
        dispatch({ type: PrivateJetActionTypes.CLEAR_MESSAGES })
        const { data } = await api.updatePrivateJet(privateJet)
        dispatch({ type: PrivateJetActionTypes.UPDATE_PRIVATE_JET , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: PrivateJetActionTypes.UPDATE_PRIVATE_JET_ERROR , payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => {
    dispatch({ type: PrivateJetActionTypes.CLEAR_MESSAGES })
}