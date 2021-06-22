// import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios"
import { setAlert } from "./alert";

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";


// LOGIN
export const login = (formData, history) => async (dispatch) => {
  dispatch({ type: LOGIN_START });
  try {
    // console.log('form data from actions:', formData)
    // const res = await axiosWithAuth().post("/login", formData);
    const res = await axios.post(process.env.REACT_APP_API_URL + '/api/login', formData);
    
    // Set token
    localStorage.setItem('token', res.data.token)

    // Send payload to reducer
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert(`Welcome`, "success"));
    // history.push("/dashboard");
  } catch (err) {
    if (err && err.response !== undefined) {
      const errors = err.response.data.errors;
      errors
        ? errors.forEach((error) => dispatch(setAlert(error.msg, "danger")))
        : dispatch(setAlert("Error logging in.", "danger"));
    } else {
      dispatch(setAlert("Error logging in.", "danger"));
    }
    dispatch({ type: LOGIN_FAIL });
  }
};

// LOGOUT
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
