import {useContext, useEffect, useRef} from 'react';
import {Text} from '../../../UI/Text/Text';
import style from './FormComment.module.scss';
import {AuthContext} from '../../../context/authContext';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store';

export const FormComment = () => {
  const value = useSelector(state => state.comment);
  const dispatch = useDispatch();
  const {auth} = useContext(AuthContext);
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('text: ', value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
      <textarea
        className={style.textarea}
        ref={textareaRef}
        value={value}
        onChange={handleChange}
      >
      </textarea>
      <button className={style.btn}>
        Отправить
      </button>
    </form>
  );
};


