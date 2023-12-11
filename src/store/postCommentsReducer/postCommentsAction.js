import axios from 'axios';
import {URL_API} from '../../api/const';
import {deleteToken} from '../tokenReducer/tokenAction';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR';

export const fetchComments = () => ({
  type: FETCH_COMMENTS,
});

export const fetchCommentsSuccess = (post, comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  post,
  comments,
});

export const fetchCommentsError = (error) => ({
  type: FETCH_COMMENTS_ERROR,
  error,
});

export const fetchCommentsAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;

  if (!token) return;

  dispatch(fetchComments());

  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      const [postData, commentsData] = data;
      const post = postData.data.children[0].data;
      const comments = commentsData.data.children.map(item => item.data);

      dispatch(fetchCommentsSuccess(post, comments));
    })
    .catch((err) => {
      console.log('err: ', err);
      if (err.status === 401) {
        dispatch(deleteToken());
      }
      console.error(err);
      dispatch(fetchCommentsError(err));
    });
};
