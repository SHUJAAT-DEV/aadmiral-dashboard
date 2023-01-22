import * as api from '../../../api'
import { HoustonCarServiceActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: HoustonCarServiceActionTypes.CLEAR_ERROR })
}

// get Houston Car Service
export const getHoustonCarService = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHoustonCarService()
        dispatch({ type: HoustonCarServiceActionTypes.FETCH_HOUSTON_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonCarServiceActionTypes.FETCH_HOUSTON_CAR_SERVICE_ERROR , payload: error })
    }
}

// update Houston Car Service
export const updateHoustonCarService = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateHoustonCarService(updatedData)
        dispatch({ type: HoustonCarServiceActionTypes.UPDATE_HOUSTON_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonCarServiceActionTypes.UPDATE_HOUSTON_CAR_SERVICE_ERROR , payload: error })
    }
}
