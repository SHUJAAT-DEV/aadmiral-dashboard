import * as api from '../../../api'
import { MontgomeryCarServiceActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: MontgomeryCarServiceActionTypes.CLEAR_ERROR })
}

// get Montgomery Car Service
export const getMontgomeryCarService = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMontgomeryCarService()
        dispatch({ type: MontgomeryCarServiceActionTypes.FETCH_MONTGOMERY_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: MontgomeryCarServiceActionTypes.FETCH_MONTGOMERY_CAR_SERVICE_ERROR , payload: error })
    }
}

// update Montgomery Car Service
export const updateMontgomeryCarService = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateMontgomeryCarService(updatedData)
        dispatch({ type: MontgomeryCarServiceActionTypes.UPDATE_MONTGOMERY_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: MontgomeryCarServiceActionTypes.UPDATE_MONTGOMERY_CAR_SERVICE_ERROR , payload: error })
    }
}
