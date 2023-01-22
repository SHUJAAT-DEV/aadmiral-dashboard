import * as api from '../../../api'
import { SugarlandCarServiceActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: SugarlandCarServiceActionTypes.CLEAR_ERROR })
}

// get Sugarland Car Service
export const getSugarlandCarService = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSugarlandCarService()
        dispatch({ type: SugarlandCarServiceActionTypes.FETCH_SUGARLAND_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: SugarlandCarServiceActionTypes.FETCH_SUGARLAND_CAR_SERVICE_ERROR , payload: error })
    }
}

// update Sugarland Car Service
export const updateSugarlandCarService = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateSugarlandCarService(updatedData)
        dispatch({ type: SugarlandCarServiceActionTypes.UPDATE_SUGARLAND_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: SugarlandCarServiceActionTypes.UPDATE_SUGARLAND_CAR_SERVICE_ERROR , payload: error })
    }
}
