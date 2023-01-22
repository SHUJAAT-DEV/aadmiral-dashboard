import * as api from '../../../api'
import { HoustonAirportTransportationActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: HoustonAirportTransportationActionTypes.CLEAR_ERROR })
}

// get Houston Airport Transportation
export const getHoustonAirportTransportation = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHoustonAirportTransportation()
        // console.log(data)
        dispatch({ type: HoustonAirportTransportationActionTypes.FETCH_Houston_Airport_Transportation , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonAirportTransportationActionTypes.FETCH_Houston_Airport_Transportation_ERROR , payload: error })
    }
}

// update Houston Airport Transportation
export const updateHoustonAirportTransportation = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateHoustonAirportTransportation(updatedData)
        dispatch({ type: HoustonAirportTransportationActionTypes.UPDATE_Houston_Airport_Transportation , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonAirportTransportationActionTypes.UPDATE_Houston_Airport_Transportation_ERROR , payload: error })
    }
}
