import {Header} from './Components/Header/Header';
import {Main} from './Components/Main/Main';
import {useDispatch} from 'react-redux';
import {updateToken} from './store/tokenReducer/tokenAction';
import {getToken} from './api/token';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;

