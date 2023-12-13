import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const setToken = (token) => {
  localStorage.setItem('bearer', JSON.stringify(token));
};

export const useToken = () => {
  const [newToken, setNewToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.includes('/auth') &&
      !location.hash.includes('post')) {
      const tokenFromURL = new URLSearchParams(location.hash.substring(1))
        .get('access_token');

      setNewToken(tokenFromURL);
      setToken(tokenFromURL);

      navigate('/');
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('bearer')) {
      setNewToken(JSON.parse(localStorage.getItem('bearer')));
      setToken(JSON.parse(localStorage.getItem('bearer')));
    }
  }, []);

  return [newToken];
};

