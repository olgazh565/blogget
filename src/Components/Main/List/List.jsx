import {useContext} from 'react';
import style from './List.module.scss';
import {Post} from './Post/Post';
import {PostsContext} from '../../../context/postsContext';

export const List = () => {
  const {postsData} = useContext(PostsContext);

  return (
    <ul className={style.list}>
      {postsData.map(({data}) => (
        <Post key={data.id} postData={data}/>
      ))}
    </ul>
  );
};

