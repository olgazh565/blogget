import style from './Layout.module.scss';

export const Layout = ({children}) => (
  <div className={style.container}>
    {children}
  </div>
);

