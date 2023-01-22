import * as api from '../../../api'
import { HoustonRadeoActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: HoustonRadeoActionTypes.CLEAR_ERROR })
}

// get HoustonRadeo
export const getHoustonRadeo = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHoustonRadeo()
        dispatch({ type: HoustonRadeoActionTypes.FETCH_HOUSTON_RADEO , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonRadeoActionTypes.FETCH_HOUSTON_RADEO_ERROR , payload: error })
    }
}

// update Houston Radeo
export const updateHoustonRadeo = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateHoustonRadeo(updatedData)
        dispatch({ type: HoustonRadeoActionTypes.UPDATE_HOUSTON_RADEO , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonRadeoActionTypes.UPDATE_HOUSTON_RADEO_ERROR , payload: error })
    }
}
