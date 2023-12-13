import style from './List.module.scss';
import {Post} from './Post/Post';
import {Loader} from '../../../UI/Loader/Loader';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPostsAsync} from '../../../store/postsReducer/postsAction';
import {Outlet, useParams} from 'react-router-dom';

export const List = () => {
  const {posts, status, isLast} = useSelector(state => state.postsReducer);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(fetchPostsAsync(page));
  }, [page]);

  useEffect(() => {
    if (!endList.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(fetchPostsAsync());
      }
    }, {
      rootMargin: '50px',
    });

    observer.observe(endList.current);

    return () => {
      endList.current && observer.unobserve(endList.current);
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {status === 'error' && 'Ошибка'}
        {
          (posts.length !== 0) ? posts.map(({data}) => (
            <Post key={data.id} postData={data} />
          )) :
          (status === 'loaded' &&
            <p><b>В данной категории постов нет</b></p>)
        }
        <li className={style.wrapper}>
          {
            (posts.length >= 30 && !isLast) ?
              <button
                className={style.btn}
                onClick={() => dispatch(fetchPostsAsync())}
              >
                Загрузить еще
              </button> :
              <p ref={endList} className={style.end} />
          }
          {status === 'loading' && <Loader />}
        </li>
      </ul>
      <Outlet />
    </>
  );
};

