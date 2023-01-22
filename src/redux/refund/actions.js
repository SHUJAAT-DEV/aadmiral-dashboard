import {
  FETCH_REFUND_REQUEST,
  FETCH_REFUND_REQUEST_ERROR,
  REFUND_REQUEST_DETAILS_ERROR,
  REFUND_REQUEST_DETAILS_LOADING,
  REFUND_REQUEST_DETAILS_SUCCESS,
} from "./types";
import * as api from "../../api";

export const getRefund = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRefund();
    dispatch({ type: FETCH_REFUND_REQUEST, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_REFUND_REQUEST_ERROR, payload: error });
  }
};

export const refundRequestAction = (id) => async (dispatch) => {
  dispatch({ type: REFUND_REQUEST_DETAILS_LOADING });
  try {
    const { data } = await api.refundRequestAPI(id);
    dispatch({ type: REFUND_REQUEST_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: REFUND_REQUEST_DETAILS_ERROR, payload: error });
  }
};
