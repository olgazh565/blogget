import axios from 'axios';
import {URL_API} from '../../api/const';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchPostComments = createAsyncThunk(
  'postComments/fetchPostComments',
  (id, {getState}) => {
    const token = getState().tokenReducer.token;

    if (!token) return;

    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data}) => {
        const [postData, commentsData] = data;
        const post = postData.data.children[0].data;
        const comments = commentsData.data.children.map(item => item.data);

        return {post, comments};
      })
      .catch((error) => {
        console.error(error);

        throw new Error(error);
      });
  }
);


