import * as api from '../../api'
import { FleetActionTypes } from './types'

// action creators

// get fleet
export const getFleet = () => async (dispatch) => {
    try {
        dispatch({ type: FleetActionTypes.CLEAR_MESSAGE })
        const { data } = await api.fetchFleet()
        dispatch({ type: FleetActionTypes.FETCH_FLEET , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: FleetActionTypes.FETCH_FLEET_ERROR , payload: error })
    }
}

// delete fleet

export const deleteFleet = (id) => async (dispatch) => {
    try {
        dispatch({ type: FleetActionTypes.CLEAR_MESSAGE })
        const { data } = await api.deleteFleet(id)
        dispatch({ type: FleetActionTypes.DELETE_FLEET , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: FleetActionTypes.DELETE_FLEET_ERROR , payload: error })
    }
}

// update fleet

export const updateFleet = (updatedData) => async (dispatch) => {
    try {
        dispatch({ type: FleetActionTypes.CLEAR_MESSAGE })
        const { data } = await api.updateFleet(updatedData)
        dispatch({ type: FleetActionTypes.UPDATE_FLEET , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: FleetActionTypes.UPDATE_FLEET_ERROR , payload: error })
    }
}

// add fleet

export const addFleet = (fleet) => async (dispatch) => {
    try {
        const { data } = await api.addFleet(fleet)
        dispatch({ type: FleetActionTypes.ADD_FLEET , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: FleetActionTypes.ADD_FLEET_ERROR , payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => dispatch({ type: FleetActionTypes.CLEAR_MESSAGE })