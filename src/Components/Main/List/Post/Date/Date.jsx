import {formatDate} from '../../../../../utils/formatData';
import style from './Date.module.scss';
import PropTypes from 'prop-types';

export const Date = ({date}) => (
  <time className={style.date} dateTime={date}>{formatDate(date)}</time>
);

Date.propTypes = {
  date: PropTypes.string,
};
