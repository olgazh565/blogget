import style from './Title.module.scss';
import PropTypes from 'prop-types';
import {Text} from '../../../../../../UI/Text/Text';

export const Title = ({title}) => (
  <Text As='h1' className={style.title}>
    <Text
      As='a'
      size={18}
      tsize={26}
      dsize={32}
      bold
      className={style.linkPost}
      href='#post'>
      {title}
    </Text>
  </Text>
);

Title.propTypes = {
  title: PropTypes.string,
};
