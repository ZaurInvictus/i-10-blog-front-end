import {
    GET_POST_BY_ID_SUCCESS,
    GET_POST_BY_ID_ERROR,
  
    DELETE_POST_SUCCESS,
    DELETE_POST_ERROR,
  
    UPDATE_POST_SUCCESS,
    UPDATE_POST_ERROR,
  } from "../actions/types";
  
  const initialState = {
    post: null,
    loading: true,
    error: {},
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
    
      // GET POST BY ID
      case GET_POST_BY_ID_SUCCESS:
        return {
          ...state,
          post: payload,
          loading: false,
        };
  
      // DELETE POST
      case DELETE_POST_SUCCESS:
        return {
          ...state,
          //   posts: state.posts.filter((post) => post.id !== payload),
          loading: false,
        };
  
      // UPDATE POST
      case UPDATE_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          post: payload
        };
  
      // ERRORS
      case GET_POST_BY_ID_ERROR:
      case DELETE_POST_ERROR:
      case UPDATE_POST_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  