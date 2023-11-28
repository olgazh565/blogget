import style from './Content.module.scss';
import PropTypes from 'prop-types';
import {Title} from './Title/Title';
import {Author} from './Author/Author';

export const Content = ({title, author, url}) => (
  <div className={style.content}>
    <Title title={title} url={url}/>
    <Author author={author} />
  </div>
);

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  url: PropTypes.string,
};
