import {createContext} from 'react';
import PropTypes from 'prop-types';
import {usePostsData} from '../hooks/usePostsData';

export const PostsContext = createContext([]);

export const PostsContextProvider = ({children}) => {
  const [postsData] = usePostsData([]);

  return (
    <PostsContext.Provider value={{postsData}}>
      {children}
    </PostsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
