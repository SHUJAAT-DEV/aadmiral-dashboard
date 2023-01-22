import * as api from '../../../api'
import { BeamountCarServiceActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: BeamountCarServiceActionTypes.CLEAR_ERROR })
}

// get Beamount Car Service
export const getBeamountCarService = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBeaumantCarService()
        dispatch({ type: BeamountCarServiceActionTypes.FETCH_BEAMOUNT_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: BeamountCarServiceActionTypes.FETCH_BEAMOUNT_CAR_SERVICE_ERROR , payload: error })
    }
}

// update Beamount Car Service
export const updateBeamountCarService = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateBeaumantCarService(updatedData)
        dispatch({ type: BeamountCarServiceActionTypes.UPDATE_BEAMOUNT_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: BeamountCarServiceActionTypes.UPDATE_BEAMOUNT_CAR_SERVICE_ERROR , payload: error })
    }
}
