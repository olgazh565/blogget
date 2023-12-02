import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
// import {TokenContext} from '../context/tokenContext';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../store';

export const useAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  // const {token, delToken} = useContext(TokenContext);
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
          dispatch(deleteToken());
        }
        console.error(error);
        setAuth({});
      });
  }, [token]);

  const delAuth = () => setAuth({});

  return [auth, delAuth];
};
