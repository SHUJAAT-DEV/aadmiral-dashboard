import * as api from '../../../api'
import { BusinessConventionActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: BusinessConventionActionTypes.CLEAR_ERROR })
}

// get BusinessConvention
export const getBusinessConvention = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBusinessConvention()
        dispatch({ type: BusinessConventionActionTypes.FETCH_BUSINESS_CONVENTION , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: BusinessConventionActionTypes.FETCH_BUSINESS_CONVENTION_ERROR , payload: error })
    }
}

// update BusinessConvention
export const updateBusinessConvention = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateBusinessConvention(updatedData)
        dispatch({ type: BusinessConventionActionTypes.UPDATE_BUSINESS_CONVENTION , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: BusinessConventionActionTypes.UPDATE_BUSINESS_CONVENTION_ERROR , payload: error })
    }
}
