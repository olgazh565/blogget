import style from './Rating.module.scss';
import PropTypes from 'prop-types';

export const Rating = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Увеличить рейтинг' />
    <p className={style.ups}>{ups}</p>
    <button className={style.down} aria-label='Понизить рейтинг' />
  </div>
);

Rating.propTypes = {
  ups: PropTypes.number,
};
