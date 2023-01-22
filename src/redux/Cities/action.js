import * as api from '../../api'
import { CitiesActionTypes } from './types'

// action creators

// get cities
export const getCities = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllCities()
        dispatch({ type: CitiesActionTypes.FETCH_CITIES , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: CitiesActionTypes.FETCH_CITIES_ERROR , payload: error })
    }
}

// delete a city
export const deleteCity = (id) => async (dispatch) => {
    try {
        dispatch({ type: CitiesActionTypes.CLEAR_MESSAGE })
        const { data } = await api.deleteCity(id)

        dispatch({ type: CitiesActionTypes.DELETE_CITY , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: CitiesActionTypes.DELETE_CITY_ERROR , payload: error })
    }
}

// add a city
export const addCity = (city) => async (dispatch) => {
    try {
        const { data } = await api.addCity(city)
        dispatch({ type: CitiesActionTypes.ADD_CITY , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: CitiesActionTypes.ADD_CITY_ERROR , payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => dispatch({ type: CitiesActionTypes.CLEAR_MESSAGE })