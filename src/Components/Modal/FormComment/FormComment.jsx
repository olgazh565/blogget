import {useContext, useEffect, useRef} from 'react';
import {Text} from '../../../UI/Text/Text';
import style from './FormComment.module.scss';
import {AuthContext} from '../../../context/authContext';

export const FormComment = () => {
  const {auth} = useContext(AuthContext);
  const textareaRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    const text = textareaRef.current.value;
    console.log('text: ', text);
    textareaRef.current.value = '';
  };

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  return (
    <form className={style.form}>
      <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
      <textarea
        className={style.textarea}
        ref={textareaRef}
      >
      </textarea>
      <button
        className={style.btn}
        onClick={handleClick}
      >
        Отправить
      </button>
    </form>
  );
};


