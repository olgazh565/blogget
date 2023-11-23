import {Text} from '../../../../../../UI/Text/Text';
import style from './Author.module.scss';
import PropTypes from 'prop-types';

export const Author = ({author}) => (
  <Text
    As='a'
    size={12}
    tsize={14}
    color='orange'
    className={style.linkAuthor}
    href='#author'>
    {author}
  </Text>
);

Author.propTypes = {
  author: PropTypes.string,
};
