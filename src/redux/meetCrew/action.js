import * as api from '../../api'
import { MeetCrewActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: MeetCrewActionTypes.CLEAR_ERROR })
}

// get crew
export const getMeetCrew = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCrew()
        dispatch({ type: MeetCrewActionTypes.FETCH_MEET_CREW , payload: data })
    } catch (error) {
        console.log(error.response.data);
        dispatch({ type: MeetCrewActionTypes.FETCH_MEET_CREW_ERROR , payload: error.response.data })
    }
}

// delete crew

export const deleteCrew = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteCrew(id)
        dispatch({ type: MeetCrewActionTypes.DELETE_CREW , payload: data })
    } catch (error) {
        console.log(error.response.data);
        dispatch({ type: MeetCrewActionTypes.DELETE_CREW_ERROR , payload: error.response.data })
    }
}

// add crew

export const addCrew = (crew) => async (dispatch) => {
    try {
        console.log("crew",crew)
        const { data } = await api.addCrew(crew)
        dispatch({ type: MeetCrewActionTypes.ADD_CREW , payload: data })
    } catch (error) {
        console.log(error.response.data);
        dispatch({ type: MeetCrewActionTypes.ADD_CREW_ERROR , payload: error.response.data })
    }
}