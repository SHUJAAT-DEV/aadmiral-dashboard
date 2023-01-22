import * as api from '../../../api'
import { FulshearCarServiceActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: FulshearCarServiceActionTypes.CLEAR_ERROR })
}

// get Houston Car Service
export const getFulshearCarService = () => async (dispatch) => {
    try {
        const { data } = await api.fetchFulshearCarService()
        dispatch({ type: FulshearCarServiceActionTypes.FETCH_Fulshear_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: FulshearCarServiceActionTypes.FETCH_Fulshear_CAR_SERVICE_ERROR , payload: error })
    }
}

// update Fulshear Car Service
export const updateFulshearCarService = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateFulshearCarService(updatedData)
        dispatch({ type: FulshearCarServiceActionTypes.UPDATE_Fulshear_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: FulshearCarServiceActionTypes.UPDATE_Fulshear_CAR_SERVICE_ERROR , payload: error })
    }
}
