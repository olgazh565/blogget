import style from './List.module.scss';
import {Post} from './Post/Post';
import {Loader} from '../../../UI/Loader/Loader';
import {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {fetchPosts} from '../../../store/postsReducer/postsAction';
import {Outlet, useParams} from 'react-router-dom';
import {usePostsData} from '../../../hooks/usePostsData';

export const List = () => {
  const {page} = useParams();
  const [posts, status, isLast] = usePostsData(page);
  const endList = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!endList.current || isLast) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(fetchPosts(page));
      }
    }, {
      rootMargin: '50px',
    });

    observer.observe(endList.current);

    return () => {
      endList.current && observer.unobserve(endList.current);
    };
  }, [endList.current, isLast, status]);

  return (
    <>
      <ul className={style.list}>
        {status === 'error' && 'Ошибка'}
        {
          (posts.length !== 0) ? posts.map(({data}) => (
            <Post key={data.id + Math.random().toFixed(3)} postData={data} />
          )) :
            (status === 'loaded' &&
              <p><b>В данной категории постов нет</b></p>)
        }
        {status === 'loaded' &&
          (
            <li className={style.wrapper}>
              {
                (posts.length >= 30 && !isLast) ?
                  <button
                    className={style.btn}
                    onClick={() => dispatch(fetchPosts(page))}
                  >
                    Загрузить еще
                  </button> :
                  <p ref={endList} className={style.end} />
              }
            </li>
          )
        }
        {status === 'loading' &&
          (
            <li className={style.loader}>
              <Loader />
            </li>
          )
        }
      </ul>
      <Outlet />
    </>
  );
};

