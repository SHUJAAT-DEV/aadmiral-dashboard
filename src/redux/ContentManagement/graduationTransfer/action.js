import * as api from '../../../api'
import { GraduationTransferActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: GraduationTransferActionTypes.CLEAR_ERROR })
}

// get GraduationTransfer
export const getGraduationTransfer = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGraduationTransfer()
        dispatch({ type: GraduationTransferActionTypes.FETCH_GRADUATION_TRANSFER , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: GraduationTransferActionTypes.FETCH_GRADUATION_TRANSFER_ERROR , payload: error })
    }
}

// update GraduationTransfer
export const updateGraduationTransfer = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateGraduation(updatedData)
        dispatch({ type: GraduationTransferActionTypes.UPDATE_GRADUATION_TRANSFER , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: GraduationTransferActionTypes.UPDATE_GRADUATION_TRANSFER_ERROR , payload: error })
    }
}
