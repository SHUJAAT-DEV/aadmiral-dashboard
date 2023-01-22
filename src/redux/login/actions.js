import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_MESSAGE,
} from "./types";
import * as api from "../../api";

export const login = (userData,history) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await api.login(userData, config);
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("dataId",data.userData._id);
    localStorage.setItem("role", data.userData.role);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    history.push("/")
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error });
  }
};

export const logout = (history) => async (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem("token");
  history.push("/login")
};

// clear messages
export const clearMessages = () => async (dispatch) =>
  dispatch({ type: CLEAR_MESSAGE });
