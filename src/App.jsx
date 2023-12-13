import {Header} from './Components/Header/Header';
import {Main} from './Components/Main/Main';
import {useDispatch} from 'react-redux';
import {updateToken} from './store/tokenReducer/tokenAction';
import {useToken} from './api/token';
import {Route, Routes} from 'react-router-dom';
import {useEffect} from 'react';

const App = () => {
  const dispatch = useDispatch();
  const [token] = useToken();

  useEffect(() => {
    if (!token) return;

    dispatch(updateToken(token));
  }, [token]);

  return (
    <Routes>
      <Route
        path='/*'
        element={
          <>
            <Header />
            <Main />
          </>
        }
      />
    </Routes>
  );
};

export default App;

