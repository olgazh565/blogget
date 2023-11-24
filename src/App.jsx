import {Header} from './Components/Header/Header';
import {Main} from './Components/Main/Main';
import {useToken} from './hooks/useToken';

function App() {
  const [token, delToken] = useToken('');
  console.log('token: ', token);

  return (
    <>
      <Header token={token} delToken={delToken}/>
      <Main/>
    </>
  );
}

export default App;

