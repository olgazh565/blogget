import style from './Title.module.scss';
import PropTypes from 'prop-types';
import {Text} from '../../../../../../UI/Text/Text';

export const Title = ({title, url}) => (
  <Text As='h1' className={style.title} title={title}>
    <a
      className={style.linkPost}
      title={title}
      href={url}
      target='_blank'
      rel='noopener noreferrer'>
      {title}
    </a>
  </Text>
);

Title.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};
