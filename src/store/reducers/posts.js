import {
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
} from "../actions/types";

const initialState = {
  posts: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    // GET POSTS
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: payload.reverse(),
      };

    // CREATE POST
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [payload, ...state.posts],
        // loading: false
      };

    // ERRORS
    case GET_POSTS_ERROR:
    case CREATE_POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
