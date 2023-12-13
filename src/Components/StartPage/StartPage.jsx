import style from './StartPage.module.scss';

export const StartPage = () => (
  <div className={style.wrapper}>
    <p className={style.title}>Стартовая страница</p>
    <p className={style.text}>Добро пожаловать!</p>
    <p className={style.text}>Выберите категорию</p>
  </div>
);

