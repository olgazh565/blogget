import {createSlice} from '@reduxjs/toolkit';

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
    searchRequest(state, {payload: search}) {
      state.search = search;
      state.status = 'loading';
      state.error = '';
    },
    searchRequestSuccess(state, action) {
      state.status = 'loaded',
      state.posts = [...state.posts, ...action.payload.children];
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    searchRequestError(state, action) {
      state.status = 'error';
      state.error = action.error;
    },
    resetSearchResult(state) {
      state.status = '';
      state.posts = [];
      state.error = '';
      state.after = '';
      state.isLast = false;
    }
  }
});

export default searchSlice.reducer;

export const {
  searchRequest,
  searchRequestSuccess,
  searchRequestError,
  resetSearchResult,
} = searchSlice.actions;


// export const searchReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SEARCH_REQUEST:
//       return {
//         ...state,
//         status: 'loading',
//         error: '',
//       };
//     case SEARCH_REQUEST_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         posts: [...state.posts, ...action.posts],
//         error: '',
//         after: action.after,
//         isLast: !action.after,
//       };
//     case SEARCH_REQUEST_ERROR:
//       return {
//         ...state,
//         status: 'error',
//         error: action.error,
//       };
//     default:
//       return state;
//   }
// };
