import * as api from '../../../api'
import { AstroActionTypes } from './types'

// action creators


// get Astro
export const getAstro = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAstro()
        dispatch({ type: AstroActionTypes.FETCH_ASTRO , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: AstroActionTypes.FETCH_ASTRO_ERROR , payload: error })
    }
}

// update Astro
export const updateAstro = (astro) => async (dispatch) => {
    try {
        dispatch({ type: AstroActionTypes.CLEAR_MESSAGES })
        const { data } = await api.updateAstro(astro)
        dispatch({ type: AstroActionTypes.UPDATE_ASTRO , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: AstroActionTypes.UPDATE_ASTRO_ERROR , payload: error })
    }
}

// clear messages
export const clearMessages = () => async (dispatch) => {
    dispatch({ type: AstroActionTypes.CLEAR_MESSAGES })
}