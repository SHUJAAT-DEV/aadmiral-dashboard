import * as api from '../../../api'
import { HoustonToVictoriaActionTypes} from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: HoustonToVictoriaActionTypes.CLEAR_ERROR })
}

// get HoustonToVictoria
export const getHoustonToVictoria = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHoustonToVictoria()
        dispatch({ type: HoustonToVictoriaActionTypes.FETCH_HOUSTON_TO_Victoria , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToVictoriaActionTypes.FETCH_HOUSTON_TO_Victoria_ERROR , payload: error })
    }
}

// update HoustonToVictoria
export const updateHoustonToVictoria = (updatedData) => async (dispatch) => {
    try {
        dispatch({ type: HoustonToVictoriaActionTypes.CLEAR_MESSAGES })
        const { data } = await api.updateHoustonToVictoria(updatedData)
        dispatch({ type: HoustonToVictoriaActionTypes.UPDATE_HOUSTON_TO_Victoria , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToVictoriaActionTypes.UPDATE_HOUSTON_TO_Victoria_ERROR , payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => {
    dispatch({ type: HoustonToVictoriaActionTypes.CLEAR_MESSAGES })
}