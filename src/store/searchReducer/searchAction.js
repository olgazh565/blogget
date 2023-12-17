import {createAsyncThunk} from '@reduxjs/toolkit';
import {URL_API} from '../../api/const';
import axios from 'axios';

export const fetchSearch = createAsyncThunk(
  'search/fetchSearch',
  async (search, {getState}) => {
    console.log('search: ', search);
    const token = getState().tokenReducer.token;
    const after = getState().searchReducer.after;
    console.log('after: ', after);
    const isLast = getState().searchReducer.isLast;

    if (!token || isLast || !search) return;

    try {
      const request = await axios(
        `${URL_API}/search?q=${search}&limit=10&${after ?
            `after=${after}` : ''}`,
        {
          headers: {
            Authorization: `bearer ${token}`
          }
        });

      return request.data.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
