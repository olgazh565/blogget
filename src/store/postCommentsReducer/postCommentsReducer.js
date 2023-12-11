import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
} from './postCommentsAction';

const initialState = {
  status: '',
  post: {},
  comments: [],
  error: '',
};

export const postCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        error: '',
        post: action.post,
        comments: action.comments,
      };
    case FETCH_COMMENTS_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    default:
      return state;
  }
};
