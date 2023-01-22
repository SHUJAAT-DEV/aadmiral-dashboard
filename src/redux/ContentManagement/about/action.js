import * as api from '../../../api'
import { AboutActionTypes } from './types'

// action creators


// get About
export const getAbout = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAbout()
        dispatch({ type: AboutActionTypes.FETCH_ABOUT , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: AboutActionTypes.FETCH_ABOUT_ERROR , payload: error })
    }
}

// update About
export const updateAbout = (about) => async (dispatch) => {
    try {
        dispatch({ type: AboutActionTypes.CLEAR_MESSAGES })
        const { data } = await api.updateAbout(about)
        dispatch({ type: AboutActionTypes.UPDATE_ABOUT , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: AboutActionTypes.UPDATE_ABOUT_ERROR , payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => {
    dispatch({ type: AboutActionTypes.CLEAR_MESSAGES })
}