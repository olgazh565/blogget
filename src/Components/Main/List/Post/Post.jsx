import style from './Post.module.scss';
import PropTypes from 'prop-types';
import {Content} from './Content/Content';
import {Image} from './Image/Image';
import {Rating} from './Rating/Rating';
import {Date} from './Date/Date';
import {DeleteBtn} from './DeleteBtn/DeleteBtn';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;

  return (
    <li className={style.post}>
      <Image title={title} />
      <Content title={title} author={author} />
      <Rating ups={ups} />
      <Date date={date}/>
      <DeleteBtn />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
