import {
  FETCH_ALL_BOOKING,
  FETCH_ALL_BOOKING_ERROR,
  FETCH_COMPLETED_BOOKING,
  FETCH_COMPLETED_BOOKING_ERROR,
  FETCH_CANCELLED_BOOKING,
  FETCH_CANCELLED_BOOKING_ERROR,
  FETCH_IN_PROGRESS_BOOKING,
  FETCH_IN_PROGRESS_BOOKING_ERROR,
  REQUEST,
  FETCH_SINGLE_BOOKING,
  FETCH_SINGLE_BOOKING_ERROR,
  MARK_AS_COMPLETE,
  MARK_AS_COMPLETE_ERROR,
  CLEAR_MESSAGES
} from "./types";
import * as api from "../../api";

export const getSingleBooking = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSingleBooking(id);
    dispatch({ type: FETCH_SINGLE_BOOKING, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_SINGLE_BOOKING_ERROR, payload: error });
  }
};

export const getAllBooking = () => async (dispatch) => {
  try {
    // dispatch({ type: REQUEST })
    const { data } = await api.fetchAllBooking();
    dispatch({ type: FETCH_ALL_BOOKING, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_ALL_BOOKING_ERROR, payload: error });
  }
};

export const getCancelledBooking = () => async (dispatch) => {
  try {
    // dispatch({ type: REQUEST })
    const { data } = await api.fetchCancelledBooking();
    dispatch({ type: FETCH_CANCELLED_BOOKING, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_CANCELLED_BOOKING_ERROR, payload: error });
  }
};

export const getCompletedBooking = () => async (dispatch) => {
  try {
    // dispatch({ type: REQUEST })
    const { data } = await api.fetchCompletedBooking();
    dispatch({ type: FETCH_COMPLETED_BOOKING, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_COMPLETED_BOOKING_ERROR, payload: error });
  }
};

export const getInProgressBooking = () => async (dispatch) => {
  try {
    const { data } = await api.fetchInProgress();
    dispatch({ type: FETCH_IN_PROGRESS_BOOKING, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_IN_PROGRESS_BOOKING_ERROR, payload: error });
  }
};

export const markAsComplete = (id) => async (dispatch) => {
  try {
    dispatch({ type: CLEAR_MESSAGES });
    const { data } = await api.markAsComplete(id);
    dispatch({ type: MARK_AS_COMPLETE, payload: data.status });
  } catch (error) {
    console.log(error);
    dispatch({ type: MARK_AS_COMPLETE_ERROR, payload: error.response.data.status });
  }
};

export const clearMessages = () => async (dispatch) => dispatch({ type: CLEAR_MESSAGES });