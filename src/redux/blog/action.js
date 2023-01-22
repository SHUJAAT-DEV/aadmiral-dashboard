import * as api from '../../api'
import { BlogActionTypes } from './types'

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: BlogActionTypes.CLEAR_ERROR })
}

// get blog
export const getBlog = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBlog()
        dispatch({ type: BlogActionTypes.FETCH_BLOG , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: BlogActionTypes.FETCH_BLOG_ERROR , payload: error })
    }
}

// delete blog

export const deleteBlog = (id) => async (dispatch) => {
    try {
        dispatch({ type: BlogActionTypes.CLEAR_MESSAGE })
        const { data } = await api.deleteBlog(id)
        dispatch({ type: BlogActionTypes.DELETE_BLOG , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: BlogActionTypes.DELETE_BLOG_ERROR , payload: error })
    }
}

// add blog
export const addBlog = (blog) => async (dispatch) => {
    try {
        dispatch({ type: BlogActionTypes.CLEAR_MESSAGE })
        console.log(blog)
        const { data } = await api.addBlog(blog)
       
        dispatch({ type: BlogActionTypes.ADD_BLOG , payload: data })
    } catch (error) {
        console.log(error.response.data);
        dispatch({ type: BlogActionTypes.ADD_BLOG_ERROR , payload: error.response.data })
    }
}

// update blog
export const updateBlog = (blog) => async (dispatch) => {
    try {
        dispatch({ type: BlogActionTypes.CLEAR_MESSAGE })
        const { data } = await api.updateBlog(blog)
        dispatch({ type: BlogActionTypes.UPDATE_BLOG , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: BlogActionTypes.UPDATE_BLOG_ERROR , payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => dispatch({ type: BlogActionTypes.CLEAR_MESSAGE })