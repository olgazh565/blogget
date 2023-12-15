import {tokenReducer} from './tokenReducer/tokenReducer';
import {tokenMiddleware} from './tokenReducer/tokenAction';
import {commentReducer} from './commentReducer/commentReducer';
import {authReducer} from './authReducer/authReducer';
import postsReducer from './postsReducer/postsSlice';
import postCommentsReducer from './postCommentsReducer/postCommentsSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    authReducer,
    postsReducer,
    postCommentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});

