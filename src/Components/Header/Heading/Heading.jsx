import style from './Heading.module.scss';

export const Heading = ({text}) => (
  <p className={style.heading}>{text}</p>
);

