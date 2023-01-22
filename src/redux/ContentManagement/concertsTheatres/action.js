import * as api from '../../../api'
import { ConcertsTheatresActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: ConcertsTheatresActionTypes.CLEAR_ERROR })
}

// get ConcertsTheatres
export const getConcertsTheatres = () => async (dispatch) => {
    try {
        const { data } = await api.fetchConcertsTheatres()
        dispatch({ type: ConcertsTheatresActionTypes.FETCH_CONCERTS_THEATRES , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: ConcertsTheatresActionTypes.FETCH_CONCERTS_THEATRES_ERROR , payload: error })
    }
}

// update ConcertsTheatres
export const updateConcertsTheatres = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateConcertsTheatres(updatedData)
        dispatch({ type: ConcertsTheatresActionTypes.UPDATE_CONCERTS_THEATRES , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: ConcertsTheatresActionTypes.UPDATE_CONCERTS_THEATRES_ERROR , payload: error })
    }
}
