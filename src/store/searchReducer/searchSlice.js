import {createSlice} from '@reduxjs/toolkit';
import {fetchSearch} from './searchAction';

const initialState = {
  status: '',
  posts: [],
  error: '',
  after: '',
  isLast: false,
  search: localStorage.search || '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.search = action.payload;
    },
    resetSearchResult(state) {
      state.status = '';
      state.posts = [];
      state.error = '';
      state.after = '';
      state.isLast = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = 'loaded',
        state.posts = [...state.posts, ...action.payload.children];
        state.error = '';
        state.after = action.payload.after;
        state.isLast = !action.payload.after;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error;
      });
  }
});

export default searchSlice.reducer;

export const {
  resetSearchResult,
  setSearchValue,
} = searchSlice.actions;

