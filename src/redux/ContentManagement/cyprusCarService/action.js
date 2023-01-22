import * as api from '../../../api'
import { CyprusCarServiceActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: CyprusCarServiceActionTypes.CLEAR_ERROR })
}

// get Cyprus Car Service
export const getCyprusCarService = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCyprusCarService()
        dispatch({ type: CyprusCarServiceActionTypes.FETCH_CYPRUS_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: CyprusCarServiceActionTypes.FETCH_CYPRUS_CAR_SERVICE_ERROR , payload: error })
    }
}

// update Cyprus Car Service
export const updateCyprusCarService = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateCyprusCarService(updatedData)
        dispatch({ type: CyprusCarServiceActionTypes.UPDATE_CYPRUS_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: CyprusCarServiceActionTypes.UPDATE_CYPRUS_CAR_SERVICE_ERROR , payload: error })
    }
}
