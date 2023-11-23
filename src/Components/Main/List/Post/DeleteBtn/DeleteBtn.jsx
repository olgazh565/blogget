import {Svg} from '../../../../Svg/Svg';
import style from './DeleteBtn.module.scss';
// import {ReactComponent as DeleteIcon} from './img/delete.svg';

export const DeleteBtn = () => (
  <button className={style.delete}>
    <Svg src={'/img/delete.svg'}/>
  </button>
);

