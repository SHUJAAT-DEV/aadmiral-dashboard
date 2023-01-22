import * as api from '../../../api'
import { TombaliCarServiceActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: TombaliCarServiceActionTypes.CLEAR_ERROR })
}

// get Tombali Car Service
export const getTombaliCarService = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTomballCarService()
        dispatch({ type: TombaliCarServiceActionTypes.FETCH_TOMBALI_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: TombaliCarServiceActionTypes.FETCH_TOMBALI_CAR_SERVICE_ERROR , payload: error })
    }
}

// update Tombali Car Service
export const updateTombaliCarService = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateTomballCarService(updatedData)
        dispatch({ type: TombaliCarServiceActionTypes.UPDATE_TOMBALI_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: TombaliCarServiceActionTypes.UPDATE_TOMBALI_CAR_SERVICE_ERROR , payload: error })
    }
}
