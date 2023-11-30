import style from './Content.module.scss';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';
import {useEffect, useState} from 'react';
import {Modal} from '../../../../Modal/Modal';

export const Content = ({title, author, id}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleEscKey = (e) => {
    if (isModalOpen) {
      if (e.key === 'Escape') {
        setModalOpen(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);

  return (
    <div className={style.content}>
      <Text
        As='h1'
        className={style.title}
        title={title}
        size={18}
        tsize={24}
        dsize={28}
      >
        <a
          className={style.linkPost}
          title={title}
          href='#post'
          onClick={() => {
            setModalOpen(true);
          }}
        >
          {title}
        </a>
      </Text>
      <Text
        As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'>
        {author}
      </Text>
      {isModalOpen &&
        <Modal
          id={id}
          closeModal={() => setModalOpen(false)}
        >
        </Modal>}
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};
