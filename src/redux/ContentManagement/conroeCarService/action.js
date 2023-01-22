import * as api from '../../../api'
import { ConroeCarServiceActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: ConroeCarServiceActionTypes.CLEAR_ERROR })
}

// get Conroe Car Service
export const getConroeCarService = () => async (dispatch) => {
    try {
        const { data } = await api.fetchConroeCarService()
        dispatch({ type: ConroeCarServiceActionTypes.FETCH_CONROE_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: ConroeCarServiceActionTypes.FETCH_CONROE_CAR_SERVICE_ERROR , payload: error })
    }
}

// update Conroe Car Service
export const updateConroeCarService = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateConroeCarService(updatedData)
        dispatch({ type: ConroeCarServiceActionTypes.UPDATE_CONROE_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: ConroeCarServiceActionTypes.UPDATE_CONROE_CAR_SERVICE_ERROR , payload: error })
    }
}
