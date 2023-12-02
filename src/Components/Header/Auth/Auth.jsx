import style from './Auth.module.scss';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import {useContext, useState} from 'react';
import {AuthContext} from '../../../context/authContext';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store';

export const Auth = () => {
  const dispatch = useDispatch();
  const {auth, delAuth} = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    setShowLogout(!showLogout);
  };

  const handleClearAuth = () => {
    delAuth();
    dispatch(deleteToken());
    setShowLogout(false);
    window.history.replaceState(null, '', window.location.origin);
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn} onClick={handleLogout}>
          <img
            className={style.img}
            src={auth.img}
            title={auth.name}
            alt={auth.name} />
          <Text>{auth.name}</Text>
        </button>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
      {
        showLogout && (
          <button
            className={style.logout}
            onClick={handleClearAuth}
          >
            Выйти
          </button>
        )
      }
    </div>
  );
};
