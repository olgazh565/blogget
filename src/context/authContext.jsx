import {createContext} from 'react';
import PropTypes from 'prop-types';
import {useAuth} from '../hooks/useAuth';

export const AuthContext = createContext({});

export const AuthContextProvider = ({children}) => {
  const [auth, delAuth] = useAuth();

  return (
    <AuthContext.Provider value={{auth, delAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
