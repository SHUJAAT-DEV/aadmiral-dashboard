import * as api from '../../../api'
import { GalvestonActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: GalvestonActionTypes.CLEAR_ERROR })
}

// get Galveston
export const getGalveston = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGalveston()
        dispatch({ type: GalvestonActionTypes.FETCH_GALVESTON, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: GalvestonActionTypes.FETCH_GALVESTON_ERROR, payload: error })
    }
}

export const getServicesPages = () => async (dispatch) => {
    try {
        const data = await api.fetchServicesPages()
        console.log("getServicesPages", data)
        dispatch({ type: GalvestonActionTypes.FETCH_SERVICES_PAGES, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: GalvestonActionTypes.FETCH_GALVESTON_ERROR, payload: error })
    }
}
export const createSericesPage = (servicesPage) => async (dispatch) => {
    try {
        const data = await api.createServicesPages(servicesPage)
        dispatch({ type: GalvestonActionTypes.CREATE_SERVICES_PAGES, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: GalvestonActionTypes.UPDATE_GALVESTON_ERROR, payload: error })
    }
}

// update Galveston
export const updateGalveston = (galveston) => async (dispatch) => {
    try {
        dispatch({ type: GalvestonActionTypes.CLEAR_MESSAGES })
        const { data } = await api.updateGalveston(galveston)
        dispatch({ type: GalvestonActionTypes.UPDATE_GALVESTON, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: GalvestonActionTypes.UPDATE_GALVESTON_ERROR, payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => {
    dispatch({ type: GalvestonActionTypes.CLEAR_MESSAGES })
}