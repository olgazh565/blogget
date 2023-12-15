import {URL_API} from '../../api/const';
import axios from 'axios';
import {deleteToken} from '../tokenReducer/tokenAction';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  (page, {dispatch, getState}) => {
    const token = getState().tokenReducer.token;
    const after = getState().postsReducer.after;
    const isLast = getState().postsReducer.isLast;

    if (!token || isLast || !page) return;

    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
        headers: {
          Authorization: `bearer ${token}`
        }
      })
      .then(({data: {data}}) => {
        const {children: posts, after} = data;

        return {posts, after};
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          dispatch(deleteToken());
        }

        throw new Error(error);
      });
  }
);
