import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authLogout, authRequestAsync} from '../store/authReducer/authAction';

export const useAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenReducer.token);
  const auth = useSelector(state => state.authReducer.data);
  const status = useSelector(state => state.authReducer.status);
  const error = useSelector(state => state.authReducer.error);

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const delAuth = () => dispatch(authLogout());

  return [auth, status, error, delAuth];
};
