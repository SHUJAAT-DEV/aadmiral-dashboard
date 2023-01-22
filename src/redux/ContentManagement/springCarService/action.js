import * as api from '../../../api'
import { SpringCarServiceActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: SpringCarServiceActionTypes.CLEAR_ERROR })
}

// get Houston Car Service
export const getSpringCarService = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSpringCarService()
        dispatch({ type: SpringCarServiceActionTypes.FETCH_Spring_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: SpringCarServiceActionTypes.FETCH_Spring_CAR_SERVICE_ERROR , payload: error })
    }
}

// update Spring Car Service
export const updateSpringCarService = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateSpringCarService(updatedData)
        dispatch({ type: SpringCarServiceActionTypes.UPDATE_Spring_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: SpringCarServiceActionTypes.UPDATE_Spring_CAR_SERVICE_ERROR , payload: error })
    }
}
