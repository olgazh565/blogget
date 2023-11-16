import style from './Heading.module.scss';

export const Heading = ({text}) => (
  <h2 className={style.heading}>{text}</h2>
);

