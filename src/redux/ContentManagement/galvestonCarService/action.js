import * as api from '../../../api'
import { GalvestonCarServiceActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: GalvestonCarServiceActionTypes.CLEAR_ERROR })
}

// get Galveston Car Service
export const getGalvestonCarService = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGalvestonCarService()
        dispatch({ type: GalvestonCarServiceActionTypes.FETCH_GALVESTON_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: GalvestonCarServiceActionTypes.FETCH_GALVESTON_CAR_SERVICE_ERROR , payload: error })
    }
}

// update Galveston Car Service
export const updateGalvestonCarService = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateGalvestonCarService(updatedData)
        dispatch({ type: GalvestonCarServiceActionTypes.UPDATE_GALVESTON_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: GalvestonCarServiceActionTypes.UPDATE_GALVESTON_CAR_SERVICE_ERROR , payload: error })
    }
}
