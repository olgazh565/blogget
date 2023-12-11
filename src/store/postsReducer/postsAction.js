import {URL_API} from '../../api/const';
import axios from 'axios';
import {deleteToken} from '../tokenReducer/tokenAction';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const SET_POSTS_DEFAULT = 'SET_POSTS_DEFAULT';

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const fetchPostsSuccess = (data) => ({
  type: FETCH_POSTS_SUCCESS,
  data,
});

export const fetchPostError = (error) => ({
  type: FETCH_POSTS_ERROR,
  error,
});

export const setPostsDefault = () => ({
  type: SET_POSTS_DEFAULT,
});

export const fetchPostsAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;

  if (!token) {
    dispatch(setPostsDefault());
    return;
  }

  dispatch(fetchPosts());

  axios(`${URL_API}/best`, {
    headers: {
      Authorization: `bearer ${token}`
    }
  })
    .then(({data: {data: {children: posts}}}) => {
      dispatch(fetchPostsSuccess(posts));
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        dispatch(deleteToken());
      }
      console.error(error);
      dispatch(fetchPostError(error));
    });
};
