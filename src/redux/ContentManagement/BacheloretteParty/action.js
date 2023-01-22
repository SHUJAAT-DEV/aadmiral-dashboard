import * as api from "../../../api";
import { BachelorettePartyActionTypes } from "./types";

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: BachelorettePartyActionTypes.CLEAR_ERROR });
};

// get Bachelor party
export const getBacheloretteParty = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBacheloretteParty();
    dispatch({
      type: BachelorettePartyActionTypes.FETCH_BACHELORETTE_PARTY,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: BachelorettePartyActionTypes.FETCH_BACHELORETTE_PARTY_ERROR,
      payload: error,
    });
  }
};

// update BacheloretteParty
export const updateBacheloretteParty = (updatedData) => async (dispatch) => {
  try {
    const { data } = await api.updateBacheloretteParty(updatedData);
    dispatch({
      type: BachelorettePartyActionTypes.UPDATE_BACHELORETTE_PARTY,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: BachelorettePartyActionTypes.UPDATE_BACHELORETTE_PARTY_ERROR,
      payload: error,
    });
  }
};
