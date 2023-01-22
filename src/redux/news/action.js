import * as api from "../../api";
import { NewsActionTypes } from "./types";

// action creators

// clear all errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: NewsActionTypes.CLEAR_ERROR });
};

// get news
export const getNews = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNews();
    dispatch({ type: NewsActionTypes.FETCH_NEWS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: NewsActionTypes.FETCH_NEWS_ERROR, payload: error });
  }
};

// delete news

export const deleteNews = (id) => async (dispatch) => {
  try {
    dispatch({ type: NewsActionTypes.CLEAR_MESSAGE });
    const { data } = await api.deleteNews(id);
    dispatch({ type: NewsActionTypes.DELETE_NEWS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: NewsActionTypes.DELETE_NEWS_ERROR, payload: error });
  }
};

// add news
export const addNews = (news) => async (dispatch) => {
  try {
    dispatch({ type: NewsActionTypes.CLEAR_MESSAGE });
    const { data } = await api.addNews(news);
    dispatch({ type: NewsActionTypes.ADD_NEWS, payload: data });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: NewsActionTypes.ADD_NEWS_ERROR,
      payload: error.response.data,
    });
  }
};

// clear messages
export const clearMessages = () => async (dispatch) =>
  dispatch({ type: NewsActionTypes.CLEAR_MESSAGE });
