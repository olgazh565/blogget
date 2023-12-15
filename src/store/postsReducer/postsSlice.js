import {createSlice} from '@reduxjs/toolkit';
import {fetchPosts} from './postsAction';

const initialState = {
  status: '',
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
    },
    resetPostsState(state) {
      state.posts = [];
      state.error = '';
      state.status = '';
      state.after = '';
      state.isLast = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.posts.push(...action.payload.posts);
        state.error = '';
        state.after = action.payload.after;
        state.isLast = !action.payload.after;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  }
});

export default postsSlice.reducer;

export const {changePage, resetPostsState} = postsSlice.actions;
