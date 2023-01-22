import * as api from '../../../api'
import { HoustonToLakeJacksonActionTypes} from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: HoustonToLakeJacksonActionTypes.CLEAR_ERROR })
}

// get HoustonToLakeJackson
export const getHoustonToLakeJackson = () => async (dispatch) => {
    try {
        const { data } = await api.fetchHoustonToLakeJackson()
        dispatch({ type: HoustonToLakeJacksonActionTypes.FETCH_HOUSTON_TO_LakeJackson , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToLakeJacksonActionTypes.FETCH_HOUSTON_TO_LakeJackson_ERROR , payload: error })
    }
}

// update HoustonToLakeJackson
export const updateHoustonToLakeJackson = (updatedData) => async (dispatch) => {
    try {
        dispatch({ type: HoustonToLakeJacksonActionTypes.CLEAR_MESSAGES })
        const { data } = await api.updateHoustonToLakeJackson(updatedData)
        dispatch({ type: HoustonToLakeJacksonActionTypes.UPDATE_HOUSTON_TO_LakeJackson , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: HoustonToLakeJacksonActionTypes.UPDATE_HOUSTON_TO_LakeJackson_ERROR , payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => {
    dispatch({ type: HoustonToLakeJacksonActionTypes.CLEAR_MESSAGES })
}