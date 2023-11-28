import {createContext} from 'react';
import PropTypes from 'prop-types';
import {useToken} from '../hooks/useToken';

export const TokenContext = createContext({});

export const TokenContextProvider = ({children}) => {
  const [token, delToken] = useToken();

  return (
    <TokenContext.Provider value={{token, delToken}}>
      {children}
    </TokenContext.Provider>
  );
};

TokenContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
