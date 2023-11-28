import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {TokenContext} from '../context/tokenContext';

export const usePostsData = () => {
  const {token, delToken} = useContext(TokenContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(({data}) => setData(data.children))
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          delToken();
        }
        console.error(error);
        setData([]);
      });
  }, [token]);

  return [data];
};
