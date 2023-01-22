import * as api from '../../../api'
import { HoustonToSantonioActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: HoustonToSantonioActionTypes.CLEAR_ERROR })
}

// get HoustonToSantonio
export const getHoustonToSantonio = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHoustonToSantonio()
        dispatch({ type: HoustonToSantonioActionTypes.FETCH_HOUSTON_TO_SANTONIO , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToSantonioActionTypes.FETCH_HOUSTON_TO_SANTONIO_ERROR , payload: error })
    }
}

// update HoustonToSantonio
export const updateHoustonToSantonio = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateHoustonToSantonio(updatedData)
        dispatch({ type: HoustonToSantonioActionTypes.UPDATE_HOUSTON_TO_SANTONIO , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToSantonioActionTypes.UPDATE_HOUSTON_TO_SANTONIO_ERROR , payload: error })
    }
}
