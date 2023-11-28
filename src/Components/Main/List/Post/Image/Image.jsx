import style from './Image.module.scss';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

export const Image = ({title, thumbnail}) => (
  <img
    className={style.img}
    src={thumbnail.includes('http') ? thumbnail : notphoto}
    alt={title}
  />
);

Image.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
