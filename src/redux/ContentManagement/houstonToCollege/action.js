import * as api from '../../../api'
import { HoustonToCollegeActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: HoustonToCollegeActionTypes.CLEAR_ERROR })
}

// get HoustonToCollege
export const getHoustonToCollege = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHoustonToCollege()
        dispatch({ type: HoustonToCollegeActionTypes.FETCH_HOUSTON_TO_COLLEGE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToCollegeActionTypes.FETCH_HOUSTON_TO_COLLEGE_ERROR , payload: error })
    }
}

// update HoustonToCollege
export const updateHoustonToCollege = (updatedData) => async (dispatch) => {
    try {
        dispatch({ type: HoustonToCollegeActionTypes.CLEAR_MESSAGES })
        const { data } = await api.updateHoustonToCollege(updatedData)
        dispatch({ type: HoustonToCollegeActionTypes.UPDATE_HOUSTON_TO_COLLEGE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToCollegeActionTypes.UPDATE_HOUSTON_TO_COLLEGE_ERROR , payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => {
    dispatch({ type: HoustonToCollegeActionTypes.CLEAR_MESSAGES })
}