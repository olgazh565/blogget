import style from './Auth.module.scss';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import {useState} from 'react';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
  const [auth, delAuth] = useAuth(token, delToken);
  const [isLogout, setLogout] = useState(false);

  const handleLogout = () => {
    setLogout(!isLogout);
  };

  const handleClearAuth = () => {
    delAuth();
    delToken();
    setLogout(false);
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
        isLogout && (
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

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
