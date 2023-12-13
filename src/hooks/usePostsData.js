// import {useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchPostsAsync} from '../store/postsReducer/postsAction';

// export const usePostsData = () => {
//   const dispatch = useDispatch();
//   const token = useSelector(state => state.tokenReducer.token);
//   const posts = useSelector(state => state.postsReducer.posts);
//   const status = useSelector(state => state.postsReducer.status);

//   useEffect(() => {
//     dispatch(fetchPostsAsync());
//   }, [token]);

//   return [posts, status];
// };
