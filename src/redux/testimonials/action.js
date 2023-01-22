import * as api from '../../api'
import { TestimonialsActionTypes } from './types'

// action creators

// get testimonials
export const getTestimonials = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTestimonials()
        dispatch({ type: TestimonialsActionTypes.FETCH_TESTIMONIALS , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: TestimonialsActionTypes.FETCH_TESTIMONIALS_ERROR , payload: error })
    }
}

// delete testimonials

export const deleteTestimonials = (id) => async (dispatch) => {
    try {
        dispatch({ type: TestimonialsActionTypes.CLEAR_MESSAGE })
        const { data } = await api.deleteTestimonials(id)
        dispatch({ type: TestimonialsActionTypes.DELETE_TESTIMONIALS , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: TestimonialsActionTypes.DELETE_TESTIMONIALS_ERROR , payload: error })
    }
}

// add testimonial
export const addTestimonials = (testimonial) => async (dispatch) => {
    try {
        dispatch({ type: TestimonialsActionTypes.CLEAR_MESSAGE })
        const { data } = await api.addTestimonials(testimonial)
        dispatch({ type: TestimonialsActionTypes.ADD_TESTIMONIALS , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: TestimonialsActionTypes.ADD_TESTIMONIALS_ERROR , payload: error })
    }
}

// update testimonial
export const updateTestimonials = (testimonial) => async (dispatch) => {
    try {
        dispatch({ type: TestimonialsActionTypes.CLEAR_MESSAGE })
        const { data } = await api.updateTestimonials(testimonial)
        dispatch({ type: TestimonialsActionTypes.UPDATE_TESTIMONIALS , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: TestimonialsActionTypes.UPDATE_TESTIMONIALS_ERROR , payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => dispatch({ type: TestimonialsActionTypes.CLEAR_MESSAGE })