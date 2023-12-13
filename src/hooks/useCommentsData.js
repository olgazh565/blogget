import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCommentsAsync}
  from '../store/postCommentsReducer/postCommentsAction';

export const useCommentsData = (id) => {
  const dispatch = useDispatch();
  const {post, comments, status} =
    useSelector(state => state.postCommentsReducer);

  useEffect(() => {
    dispatch(fetchCommentsAsync(id));
  }, [id]);

  return [post, comments, status];
};
