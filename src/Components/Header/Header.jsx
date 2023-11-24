import {Auth} from './Auth/Auth';
import {Heading} from './Heading/Heading';
import {Layout} from '../Layout/Layout';
import {Logo} from './Logo/Logo';
import {Search} from './Search/Search';
import style from './Header.module.scss';
import PropTypes from 'prop-types';

export const Header = ({token, delToken}) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo/>
        <Heading text='Главная'/>
        <Search/>
        <Auth token={token} delToken={delToken}/>
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
