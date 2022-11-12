import api from "../../utils/api";
// import { setAlert } from "./alertActions";
import setAuthToken from "../../utils/setAuthToken";
import {
  AUTH_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAIL,
} from "../constants";

// Login User
export const loginAction = (data) => async (dispatch) => {
  try {
    const res = await api.post("/auth/login", data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await api.get("/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
// logout User
export const logout = () => ({ type: LOGOUT });

// Register User
export const registerAction = (data) => async (dispatch) => {
  try {
    const res = await api.post("/auth/register", data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

