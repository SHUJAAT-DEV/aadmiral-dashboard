import * as api from '../../../api'
import { RichmondCarServiceActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: RichmondCarServiceActionTypes.CLEAR_ERROR })
}

// get Richmond Car Service
export const getRichmondCarService = () => async (dispatch) => {
    try {
        const { data } = await api.fetchRichmondCarService()
        dispatch({ type: RichmondCarServiceActionTypes.FETCH_RICHMOND_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: RichmondCarServiceActionTypes.FETCH_RICHMOND_CAR_SERVICE_ERROR , payload: error })
    }
}

// update Richmond Car Service
export const updateRichmondCarService = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateRichmondCarService(updatedData)
        dispatch({ type: RichmondCarServiceActionTypes.UPDATE_RICHMOND_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: RichmondCarServiceActionTypes.UPDATE_RICHMOND_CAR_SERVICE_ERROR , payload: error })
    }
}
