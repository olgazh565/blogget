import {useEffect, useState} from 'react';
import style from './Tabs.module.scss';
import PropTypes from 'prop-types';
import {assignId} from '../../../utils/generateRandomId';
import {debounceRaf} from '../../../utils/debounce';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {Text} from '../../../UI/Text/Text';

const LIST = [
  {value: 'Главная', Icon: HomeIcon},
  {value: 'Топ', Icon: TopIcon},
  {value: 'Лучшие', Icon: BestIcon},
  {value: 'Горячие', Icon: HotIcon}
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setDropDownOpen] = useState(false);
  const [isDropdown, setDropDown] = useState(true);
  const [chosenTab, setChosenTab] = useState('Главная');

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setDropDownOpen(!isDropdownOpen)}>
            {chosenTab}
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}
      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setDropDownOpen(false)}>
          {LIST.map(({value, id, Icon}) => (
            <Text As='li' className={style.item} key={id}>
              <Text
                As='button'
                className={style.btn}
                onClick={() => setChosenTab(value)}>
                {value}
                {Icon && <Icon width={30} height={30} />}
              </Text>
            </Text>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
