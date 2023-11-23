import {generateRandomId} from '../../../utils/generateRandomId';
import style from './List.module.scss';
import {Post} from './Post/Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 77,
      date: '2022-01-21T09:45:00.000Z',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 24,
      date: '2022-02-24T09:45:00.000Z',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 28,
      date: '2023-05-24T09:45:00.000Z',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 5,
      date: '2023-02-24T09:45:00.000Z',
    }
  ];

  return (
    <ul className={style.list}>
      {postsData.map(postData => (
        <Post key={generateRandomId()} postData={postData}/>
      ))}
    </ul>
  );
};
