import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenReducer} from './tokenReducer/tokenReducer';
import {tokenMiddleware} from './tokenReducer/tokenAction';
import {commentReducer} from './commentReducer/commentReducer';
import {authReducer} from './authReducer/authReducer';
import {postsReducer} from './postsReducer/postsReducer';
import {postCommentsReducer} from './postCommentsReducer/postCommentsReducer';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
  tokenReducer,
  commentReducer,
  authReducer,
  postsReducer,
  postCommentsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
