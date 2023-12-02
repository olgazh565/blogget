import style from './Modal.module.scss';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import {createPortal} from 'react-dom';
import {useEffect, useRef, useState} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {FormComment} from './FormComment/FormComment';
import {Comments} from './Comments/Comments';

export const Modal = ({id, closeModal}) => {
  const [[post, comments]] = useCommentsData(id);
  const [showCommentsForm, setShowCommentsForm] = useState(false);
  const [showCommentsBtn, setShowCommentsBtn] = useState(true);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (post) setDataLoaded(true);
  }, [post]);

  const handleCloseModal = e => {
    const target = e.target;
    if (target === overlayRef.current ||
      closeBtnRef.current?.contains(target)) {
      closeModal();
    }
  };

  const handleShowForm = () => {
    setShowCommentsForm(true);
    setShowCommentsBtn(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleCloseModal);
    return () => {
      document.removeEventListener('click', handleCloseModal);
    };
  }, []);

  return createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal} >

        {!isDataLoaded && <p>Идет загрузка...</p>}

        {isDataLoaded && (
          <>
            <h2 className={style.title}>
              <a
                className={style.linkPost}
                href={post.url}
                target='_blank'
                rel="noreferrer"
              >{post && post.title}
              </a>
            </h2>
            <div className={style.content}>
              <Markdown options={{
                overrides: {
                  a: {
                    props: {
                      target: '_blank'
                    },
                  },
                },
              }}>
                {post.selftext}
              </Markdown>
            </div>

            <p className={style.author}>{post && post.author}</p>

            {showCommentsBtn &&
              <button
                className={style.btn}
                onClick={handleShowForm}
              >
                Написать комментарий
              </button>
            }

            <Comments comments={comments} />

            {showCommentsForm && <FormComment />}

            <button className={style.close} ref={closeBtnRef}>
              <CloseIcon />
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
