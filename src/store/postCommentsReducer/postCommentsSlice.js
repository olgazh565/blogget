import {createSlice} from '@reduxjs/toolkit';
import {fetchPostComments} from './postCommentsAction';

const initialState = {
  status: '',
  post: {},
  comments: [],
  error: '',
};

export const postCommentsSlice = createSlice({
  name: 'postComments',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostComments.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchPostComments.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.error = '';
        state.post = action.payload.post;
        state.comments = action.payload.comments;
      })
      .addCase(fetchPostComments.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  }
});

export default postCommentsSlice.reducer;
