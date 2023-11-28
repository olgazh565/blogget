import style from './Post.module.scss';
import PropTypes from 'prop-types';
import {Content} from './Content/Content';
import {Image} from './Image/Image';
import {Rating} from './Rating/Rating';
import {DateEl} from './Date/Date';
import {DeleteBtn} from './DeleteBtn/DeleteBtn';

export const Post = ({postData}) => {
  const {title, author, ups, created, url, thumbnail} = postData;

  return (
    <li className={style.post}>
      <Image title={title} thumbnail={thumbnail}/>
      <Content title={title} author={author} url={url}/>
      <Rating ups={ups} />
      <DateEl date={created}/>
      <DeleteBtn />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
