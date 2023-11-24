import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';

export const useAuth = (token, delToken) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');

        setAuth({name, img});
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          delToken();
        }
        console.error(error);
        setAuth({});
      });
  }, [token]);

  const delAuth = () => {
    setAuth({});
  };

  return [auth, delAuth];
};
