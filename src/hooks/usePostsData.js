import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../store/postsReducer/postsAction';

export const usePostsData = (page) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenReducer.token);
  const {posts, status, isLast} = useSelector(state => state.postsReducer);

  useEffect(() => {
    if (!page || !token) return;

    dispatch(fetchPosts(page));
  }, [token, page]);

  return [posts, status, isLast];
};
