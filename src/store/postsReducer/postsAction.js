import {URL_API} from '../../api/const';
import axios from 'axios';
import {deleteToken} from '../tokenReducer/tokenAction';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const SET_POSTS_DEFAULT = 'SET_POSTS_DEFAULT';
export const FETCH_POSTS_SUCCESS_AFTER = 'FETCH_POSTS_SUCCESS_AFTER';
export const CHANGE_PAGE = 'CHANGE_PAGE';

const fetchPosts = () => ({
  type: FETCH_POSTS,
});

const fetchPostsSuccess = (data) => ({
  type: FETCH_POSTS_SUCCESS,
  posts: data.children,
  after: data.after,
});

const fetchPostsSuccessAfter = (data) => ({
  type: FETCH_POSTS_SUCCESS_AFTER,
  posts: data.children,
  after: data.after,
});

const fetchPostError = (error) => ({
  type: FETCH_POSTS_ERROR,
  error,
});

export const setPostsDefault = () => ({
  type: SET_POSTS_DEFAULT,
});

const changePage = page => ({
  type: CHANGE_PAGE,
  page,
});

export const fetchPostsAsync = (newPage) => (dispatch, getState) => {
  let page = getState().postsReducer.page;

  if (newPage) {
    page = newPage;
    dispatch(changePage(page));
  }

  const token = getState().tokenReducer.token;
  const after = getState().postsReducer.after;
  const status = getState().postsReducer.status;
  const isLast = getState().postsReducer.isLast;

  if (!token || status === 'loading' || isLast) return;

  dispatch(fetchPosts());

  axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`
    }
  })
    .then(({data}) => {
      if (after) {
        dispatch(fetchPostsSuccessAfter(data.data));
      } else {
        dispatch(fetchPostsSuccess(data.data));
      }
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        dispatch(deleteToken());
      }
      console.error(error);
      dispatch(fetchPostError(error));
    });
};
