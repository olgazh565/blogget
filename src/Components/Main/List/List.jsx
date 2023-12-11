import style from './List.module.scss';
import {Post} from './Post/Post';
import {usePostsData} from '../../../hooks/usePostsData';
import {Loader} from '../../../UI/Loader/Loader';

export const List = () => {
  const [postsData, status] = usePostsData();

  return (
    <ul className={style.list}>
      {status === 'loading' && <Loader />}
      {status === 'error' && 'Ошибка'}
      {status === 'loaded' && postsData.map(({data}) => (
        <Post key={data.id} postData={data}/>
      ))}
    </ul>
  );
};

