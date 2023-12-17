import {Header} from './Components/Header/Header';
import {Main} from './Components/Main/Main';
import {useDispatch, useSelector} from 'react-redux';
import {updateToken} from './store/tokenReducer/tokenAction';
import {getToken} from './api/token';
import {Route, Routes, useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {resetSearchResult} from './store/searchReducer/searchReducer';

const App = () => {
  const search = useSelector(state => state.searchReducer.search);
  const {pathname} = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateToken(getToken()));
  }, []);

  useEffect(() => {
    if (search && !pathname.includes('search')) {
      localStorage.removeItem('search');
      dispatch(resetSearchResult());
    }
  }, [search, pathname]);

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

