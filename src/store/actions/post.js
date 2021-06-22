import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,

  GET_POST_BY_ID_SUCCESS,
  GET_POST_BY_ID_ERROR,

  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,

  DELETE_POST_ERROR,
  DELETE_POST_SUCCESS,

  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
} from "./types";



// GET ALL POSTS
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axiosWithAuth().get(process.env.REACT_APP_API_URL + "/api/posts");
    // console.log("posts action res:", res);
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_POSTS_ERROR,
      payload: { msg: "Server error. Something went wrong" },
    });
  }
};


// GET POST BY ID
export const getPostById = (id) => async (dispatch) => {
  try {
    // const res = await axiosWithAuth().get(`/post/${id}`)
    const res = await axiosWithAuth().get(
      process.env.REACT_APP_API_URL + `/api/posts/${id}`
    );
    // console.log("result:", res);
    dispatch({
      type: GET_POST_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_POST_BY_ID_ERROR,
      payload: { msg: "Server error. Something went wrong" },
    });
  }
};


// CREATE POST
export const createPost = (formData) => async dispatch => {
  try {
    const res = await axiosWithAuth().post(process.env.REACT_APP_API_URL + '/api/posts', formData)
    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: res.data
    })
    dispatch(setAlert('Post created', 'success'))
  } catch(err) {
    dispatch({ type: CREATE_POST_ERROR })
    dispatch(setAlert('Error creating post', 'error'))
  }
}


// DELETE POST
export const deletePost = (id) => async dispatch => {
  try {
    await axiosWithAuth().delete(process.env.REACT_APP_API_URL + `/api/posts/${id}`)
    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: id
    })
    dispatch(setAlert('Post removed', 'success'))
  } catch(err) {
    dispatch({ 
      type: DELETE_POST_ERROR,
      error: err
    })
  }
}


// UPDATE POST 
export const updatePost = post => async dispatch => {
  try {
    const res = await axiosWithAuth().put(process.env.REACT_APP_API_URL + `/api/posts/${post.id}`, post)
    console.log('actions post:', post)
    dispatch({
      type: UPDATE_POST_SUCCESS,
      payload: res.data
    })
    dispatch(setAlert('Post data successfully updated', 'success'))
  } catch(err) {
      dispatch({ type: UPDATE_POST_ERROR })
      dispatch(setAlert('Update error', 'error'))
  }
}