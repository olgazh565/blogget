import {Header} from './Components/Header/Header';
import {Main} from './Components/Main/Main';
import {useDispatch} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';
import {updateToken} from './store';
import {getToken} from './api/token';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <AuthContextProvider>
      <PostsContextProvider>
        <Header />
        <Main />
      </PostsContextProvider>
    </AuthContextProvider>
  );
};

export default App;

