import * as api from '../../api'
import { OurPartnerActionTypes } from './types'

// action creators

// get our partner
export const getOurPartner = () => async (dispatch) => {
    try {
        const { data } = await api.fetchOurPartner()
        dispatch({ type: OurPartnerActionTypes.FETCH_OUR_PARTNER , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: OurPartnerActionTypes.FETCH_OUR_PARTNER_ERROR , payload: error })
    }
}

// delete our partner

export const deleteOurPartner = (id) => async (dispatch) => {
    try {
        dispatch({ type: OurPartnerActionTypes.CLEAR_MESSAGE })
        const { data } = await api.deleteOurPartner(id)
        dispatch({ type: OurPartnerActionTypes.DELETE_OUR_PARTNER , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: OurPartnerActionTypes.DELETE_OUR_PARTNER_ERROR , payload: error })
    }
}

// add our partner
export const addOurPartner = (partner) => async (dispatch) => {
    try {
        dispatch({ type: OurPartnerActionTypes.CLEAR_MESSAGE })
        const { data } = await api.addOurPartner(partner)
        dispatch({ type: OurPartnerActionTypes.ADD_OUR_PARTNER , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: OurPartnerActionTypes.ADD_OUR_PARTNER_ERROR , payload: error })
    }
}

// update our partner
export const updateOurPartner = (partner) => async (dispatch) => {
    try {
        dispatch({ type: OurPartnerActionTypes.CLEAR_MESSAGE })
        const { data } = await api.updateOurPartner(partner)
        dispatch({ type: OurPartnerActionTypes.UPDATE_OUR_PARTNER , payload: data })
    } catch (error) {
        console.log(error);
        dispatch({ type: OurPartnerActionTypes.UPDATE_OUR_PARTNER_ERROR , payload: error })
    }
}


// clear messages
export const clearMessages = () => async (dispatch) => dispatch({ type: OurPartnerActionTypes.CLEAR_MESSAGE })