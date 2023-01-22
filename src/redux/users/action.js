import * as api from '../../api'
import { UsersActionTypes } from './types'

// action creators

// get Users
export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllUsers()
        dispatch({ type: UsersActionTypes.FETCH_ALL_USERS , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: UsersActionTypes.FETCH_ALL_USERS_ERROR , payload: error })
    }
}

// delete a user

export const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch({ type: UsersActionTypes.DELETE_USER_REQUEST })
        dispatch({ type: UsersActionTypes.CLEAR_MESSAGE })
        const { data } = await api.deleteUser(id)
        dispatch({ type: UsersActionTypes.DELETE_USER , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: UsersActionTypes.DELETE_USER_ERROR , payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => dispatch({ type: UsersActionTypes.CLEAR_MESSAGE })