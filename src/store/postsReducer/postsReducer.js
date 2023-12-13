import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  SET_POSTS_DEFAULT,
  FETCH_POSTS_SUCCESS_AFTER,
  CHANGE_PAGE,
} from './postsAction';

const initialState = {
  status: '',
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
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
        posts: action.posts,
        error: '',
        after: action.after,
        isLast: !action.after,
      };
    case FETCH_POSTS_SUCCESS_AFTER:
      return {
        ...state,
        status: 'loaded',
        posts: [...state.posts, ...action.posts],
        error: '',
        after: action.after,
        isLast: !action.after,
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
        posts: [],
        error: '',
        status: '',
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
        after: '',
        isLast: false,
      };
    default:
      return state;
  }
};
