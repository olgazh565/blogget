import style from './Main.module.scss';
import {Layout} from '../Layout/Layout';
import {Tabs} from './Tabs/Tabs';
import {List} from './List/List';
import {Route, Routes} from 'react-router-dom';
import {Modal} from '../Modal/Modal';
import {NotFoundPage} from '../NotFoundPage/NotFoundPage';
import {StartPage} from '../StartPage/StartPage';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/' element={<StartPage />}/>
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />}/>
        </Route>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </Layout>
  </main>
);


