import * as api from '../../../api'
import { HoustonHobbyActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: HoustonHobbyActionTypes.CLEAR_ERROR })
}

// get Houston
export const getHoustonHobby = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHoustonHobby()
        dispatch({ type: HoustonHobbyActionTypes.FETCH_HOUSTON_HOBBY , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonHobbyActionTypes.FETCH_HOUSTON_HOBBY_ERROR , payload: error })
    }
}

// update Houston Hobby
export const updateHoustonHobby = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateHoustonHobby(updatedData)
        dispatch({ type: HoustonHobbyActionTypes.UPDATE_HOUSTON_HOBBY , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonHobbyActionTypes.UPDATE_HOUSTON_HOBBY_ERROR , payload: error })
    }
}
