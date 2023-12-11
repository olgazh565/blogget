import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCommentsAsync}
  from '../store/postCommentsReducer/postCommentsAction';

export const useCommentsData = (id) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.postCommentsReducer.post);
  const comments = useSelector(state => state.postCommentsReducer.comments);
  const status = useSelector(state => state.postCommentsReducer.status);

  useEffect(() => {
    dispatch(fetchCommentsAsync(id));
  }, [id]);

  return [post, comments, status];
};
