import * as api from '../../../api'
import { HoustonToAustinActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: HoustonToAustinActionTypes.CLEAR_ERROR })
}

// get HoustonToCollege
export const getHoustonToAustin = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHoustonToAustin()
        dispatch({ type: HoustonToAustinActionTypes.FETCH_HOUSTON_TO_AUSTIN , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToAustinActionTypes.FETCH_HOUSTON_TO_AUSTIN_ERROR , payload: error })
    }
}

// update HoustonToCollege
export const updateHoustonToAustin = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateHoustonToAustin(updatedData)
        dispatch({ type: HoustonToAustinActionTypes.UPDATE_HOUSTON_TO_AUSTIN , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToAustinActionTypes.UPDATE_HOUSTON_TO_AUSTIN_ERROR , payload: error })
    }
}
