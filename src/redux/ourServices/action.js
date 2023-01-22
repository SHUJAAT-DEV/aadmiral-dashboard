import * as api from '../../api'
import { OurServicesActionTypes } from './types'

// action creators

// get our Services
export const getOurServices = () => async (dispatch) => {
    try {
        const { data } = await api.fetchOurServices()
        dispatch({ type: OurServicesActionTypes.FETCH_OUR_SERVICES , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: OurServicesActionTypes.FETCH_OUR_SERVICES_ERROR , payload: error })
    }
}

// delete our Services

export const deleteOurServices = (id) => async (dispatch) => {
    try {
        dispatch({ type: OurServicesActionTypes.CLEAR_MESSAGE })
        const { data } = await api.deleteOurServices(id)
        dispatch({ type: OurServicesActionTypes.DELETE_OUR_SERVICES , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: OurServicesActionTypes.DELETE_OUR_SERVICES_ERROR , payload: error })
    }
}

// add our service
export const addOurServices = (service) => async (dispatch) => {
    try {
        dispatch({ type: OurServicesActionTypes.CLEAR_MESSAGE })
        const { data } = await api.addOurServices(service)
        dispatch({ type: OurServicesActionTypes.ADD_OUR_SERVICES , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: OurServicesActionTypes.ADD_OUR_SERVICES_ERROR , payload: error })
    }
}

// update our service
export const updateOurServices = (service) => async (dispatch) => {
    try {
        dispatch({ type: OurServicesActionTypes.CLEAR_MESSAGE })
        const { data } = await api.updateOurServices(service)
        dispatch({ type: OurServicesActionTypes.UPDATE_OUR_SERVICES , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: OurServicesActionTypes.UPDATE_OUR_SERVICES_ERROR , payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => dispatch({ type: OurServicesActionTypes.CLEAR_MESSAGE })