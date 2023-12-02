import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../store';

export const usePostsData = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!token) {
      setData([]);
      return;
    }

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(({data}) => setData(data.children))
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          dispatch(deleteToken());
        }
        console.error(error);
        setData([]);
      });
  }, [token]);

  return [data];
};
