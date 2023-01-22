import * as api from '../../../api'
import { KatyCarServiceActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: KatyCarServiceActionTypes.CLEAR_ERROR })
}

// get Katy Car Service
export const getKatyCarService = () => async (dispatch) => {
    try {
        const { data } = await api.fetchKatyCarService()
        dispatch({ type: KatyCarServiceActionTypes.FETCH_KATY_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: KatyCarServiceActionTypes.FETCH_KATY_CAR_SERVICE_ERROR , payload: error })
    }
}

// update Katy Car Service
export const updateKatyCarService = (updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updateKatyCarService(updatedData)
        dispatch({ type: KatyCarServiceActionTypes.UPDATE_KATY_CAR_SERVICE , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: KatyCarServiceActionTypes.UPDATE_KATY_CAR_SERVICE_ERROR , payload: error })
    }
}
