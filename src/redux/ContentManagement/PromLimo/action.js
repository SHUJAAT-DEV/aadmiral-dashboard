import * as api from "../../../api";
import { PromLimoActionTypes } from "./types";

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: PromLimoActionTypes.CLEAR_ERROR });
};

// get Bachelor party
export const getPromLimo = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPromLimo();
    dispatch({ type: PromLimoActionTypes.FETCH_PROM_LIMO, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PromLimoActionTypes.FETCH_PROM_LIMO_ERROR,
      payload: error,
    });
  }
};

// update PromLimo
export const updatePromLimo = (updatedData) => async (dispatch) => {
  try {
    const { data } = await api.updatePromLimo(updatedData);
    dispatch({ type: PromLimoActionTypes.UPDATE_PROM_LIMO, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PromLimoActionTypes.UPDATE_PROM_LIMO_ERROR,
      payload: error,
    });
  }
};
