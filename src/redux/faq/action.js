import * as api from '../../api'
import { FaqsActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: FaqsActionTypes.CLEAR_ERROR })
}

// get faq
export const getFaq = () => async (dispatch) => {
    try {
        const { data } = await api.fetchFaq()
        dispatch({ type: FaqsActionTypes.FETCH_FAQ , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: FaqsActionTypes.FETCH_FAQ_ERROR , payload: error })
    }
}

// delete faq

export const deleteFaq = (id) => async (dispatch) => {
    try {
        dispatch({ type: FaqsActionTypes.CLEAR_MESSAGE })
        const { data } = await api.deleteFaq(id)
        dispatch({ type: FaqsActionTypes.DELETE_FAQ , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: FaqsActionTypes.DELETE_FAQ_ERROR , payload: error })
    }
}

// add faq
export const addFaq = (faq) => async (dispatch) => {
    try {
        dispatch({ type: FaqsActionTypes.CLEAR_MESSAGE })
        const { data } = await api.addFaq(faq)
        dispatch({ type: FaqsActionTypes.ADD_FAQ , payload: data })
    } catch (error) {
        console.log(error.response.data);
        dispatch({ type: FaqsActionTypes.ADD_FAQ_ERROR , payload: error.response.data })
    }
}

// update faq
export const updateFaq = (faq) => async (dispatch) => {
    try {
        dispatch({ type: FaqsActionTypes.CLEAR_MESSAGE })
        const { data } = await api.updateFaq(faq)
        dispatch({ type: FaqsActionTypes.UPDATE_FAQ , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: FaqsActionTypes.UPDATE_FAQ_ERROR , payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => dispatch({ type: FaqsActionTypes.CLEAR_MESSAGE })