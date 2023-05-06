import * as api from '../../../api'
import { HomeActionTypes } from './types'

// action creators


// get Home
export const getHome = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHome()
        dispatch({ type: HomeActionTypes.FETCH_HOME, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HomeActionTypes.FETCH_HOME_ERROR, payload: error })
    }
}

// update Home
export const updateHome = (home) => async (dispatch) => {
    try {
        dispatch({ type: HomeActionTypes.CLEAR_MESSAGES })
        const { data } = await api.updateHome(home)
        dispatch({ type: HomeActionTypes.UPDATE_HOME, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HomeActionTypes.UPDATE_HOME_ERROR, payload: error })
    }
}

// update services
export const updateServices = (service, id) => async (dispatch) => {
    try {
        dispatch({ type: HomeActionTypes.LOADING, payload: {} })
        const { data } = await api.updateService(service)
        await getServicesById(id);
        dispatch({ type: HomeActionTypes.UPDATE_SERVICES_DETAIL, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HomeActionTypes.UPDATE_HOME_ERROR, payload: error })
    }
}

// update services
export const getServicesById = (id) => async (dispatch) => {
    try {
        dispatch({ type: HomeActionTypes.LOADING, payload: {} })
        const { data } = await api.getService(id)
        dispatch({ type: HomeActionTypes.GET_SERVICES_DETAIL, payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HomeActionTypes.UPDATE_HOME_ERROR, payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => {
    dispatch({ type: HomeActionTypes.CLEAR_MESSAGES })
}