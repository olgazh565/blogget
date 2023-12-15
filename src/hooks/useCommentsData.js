import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPostComments}
  from '../store/postCommentsReducer/postCommentsAction';

export const useCommentsData = (id) => {
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();
  const {post, comments, status} =
    useSelector(state => state.postCommentsReducer);

  useEffect(() => {
    if (!token) return;

    dispatch(fetchPostComments(id));
  }, [id, token]);

  return [post, comments, status];
};
