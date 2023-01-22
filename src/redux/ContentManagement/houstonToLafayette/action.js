import * as api from '../../../api'
import { HoustonToLafayetteActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: HoustonToLafayetteActionTypes.CLEAR_ERROR })
}

// get Houston to lafayette
export const getHoustonToLafayette = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHoustonToLafayette()
        dispatch({ type: HoustonToLafayetteActionTypes.FETCH_HOUSTON_TO_LAFAYETTE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToLafayetteActionTypes.FETCH_HOUSTON_TO_LAFAYETTE_ERROR , payload: error })
    }
}

// update HoustonToLafayette
export const updateHoustonToLafayette = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateHoustonToLafayette(updatedData)
        dispatch({ type: HoustonToLafayetteActionTypes.UPDATE_HOUSTON_TO_LAFAYETTE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToLafayetteActionTypes.UPDATE_HOUSTON_TO_LAFAYETTE_ERROR , payload: error })
    }
}
