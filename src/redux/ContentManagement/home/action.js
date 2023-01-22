import * as api from '../../../api'
import { HomeActionTypes } from './types'

// action creators


// get Home
export const getHome = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHome()
        dispatch({ type: HomeActionTypes.FETCH_HOME , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HomeActionTypes.FETCH_HOME_ERROR , payload: error })
    }
}

// update Home
export const updateHome = (home) => async (dispatch) => {
    try {
        dispatch({ type: HomeActionTypes.CLEAR_MESSAGES })
        const { data } = await api.updateHome(home)
        dispatch({ type: HomeActionTypes.UPDATE_HOME , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HomeActionTypes.UPDATE_HOME_ERROR , payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => {
    dispatch({ type: HomeActionTypes.CLEAR_MESSAGES })
}