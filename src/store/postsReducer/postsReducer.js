import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  SET_POSTS_DEFAULT,
} from './postsAction';

const initialState = {
  status: '',
  data: [],
  error: '',
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        data: action.data,
        error: '',
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    case SET_POSTS_DEFAULT:
      return {
        ...state,
        data: [],
        error: '',
        status: '',
      };
    default:
      return state;
  }
};
