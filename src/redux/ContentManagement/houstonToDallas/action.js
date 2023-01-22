import * as api from '../../../api'
import { HoustonToDallasActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: HoustonToDallasActionTypes.CLEAR_ERROR })
}

// get HoustonToDallas
export const getHoustonToDallas = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHoustonToDallas()
        dispatch({ type: HoustonToDallasActionTypes.FETCH_HOUSTON_TO_DALLAS , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToDallasActionTypes.FETCH_HOUSTON_TO_DALLAS_ERROR , payload: error })
    }
}

// update HoustonToDallas
export const updateHoustonToDallas = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateHoustonToDallas(updatedData)
        dispatch({ type: HoustonToDallasActionTypes.UPDATE_HOUSTON_TO_DALLAS , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToDallasActionTypes.UPDATE_HOUSTON_TO_DALLAS_ERROR , payload: error })
    }
}
