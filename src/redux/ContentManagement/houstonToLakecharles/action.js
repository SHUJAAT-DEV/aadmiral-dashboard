import * as api from '../../../api'
import { HoustonToLakecharlesActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: HoustonToLakecharlesActionTypes.CLEAR_ERROR })
}

// get HoustonToLakecharles
export const getHoustonToLakecharles = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHoustonToLakecharles()
        dispatch({ type: HoustonToLakecharlesActionTypes.FETCH_HOUSTON_TO_LAKECHARLES , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToLakecharlesActionTypes.FETCH_HOUSTON_TO_LAKECHARLES_ERROR , payload: error })
    }
}

// update HoustonToLakecharles
export const updateHoustonToLakecharles = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateHoustonToLakecharles(updatedData)
        dispatch({ type: HoustonToLakecharlesActionTypes.UPDATE_HOUSTON_TO_LAKECHARLES , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToLakecharlesActionTypes.UPDATE_HOUSTON_TO_LAKECHARLES_ERROR , payload: error })
    }
}
