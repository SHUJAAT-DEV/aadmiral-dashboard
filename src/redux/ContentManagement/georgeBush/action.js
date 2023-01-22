import * as api from '../../../api'
import { GeorgeBushActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: GeorgeBushActionTypes.CLEAR_ERROR })
}

// get George Bush
export const getGeorgeBush = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGeorgeBush()
        dispatch({ type: GeorgeBushActionTypes.FETCH_GEORGE_BUSH , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: GeorgeBushActionTypes.FETCH_GEORGE_BUSH_ERROR , payload: error })
    }
}

// update George Bush
export const updateGeorgeBush = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateGeorgeBush(updatedData)
        dispatch({ type: GeorgeBushActionTypes.UPDATE_GEORGE_BUSH , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: GeorgeBushActionTypes.UPDATE_GEORGE_BUSH_ERROR , payload: error })
    }
}
