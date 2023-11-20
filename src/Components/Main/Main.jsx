import style from './Main.module.scss';
import {Layout} from '../Layout/Layout';
import {Tabs} from './Tabs/Tabs';
import {List} from './List/List';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <List />
    </Layout>
  </main>
);

