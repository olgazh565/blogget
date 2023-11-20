import style from './Image.module.scss';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

export const Image = ({title}) => (
  <img className={style.img} src={notphoto} alt={title}/>
);

Image.propTypes = {
  title: PropTypes.string,
};
