import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { ListItem } from '../../library/ListItem';
import Checkbox from '../checkbox/Checkbox.component';
import './Item.component.scss';

type ItemProps = {
  item: ListItem;
  isDone: boolean;
  onClickDelete: () => void;
  onClickCheck: () => void;
};

export default function Button({
  item,
  onClickDelete,
  onClickCheck,
  isDone,
}: ItemProps) {
  return (
    <div className="item">
      <Checkbox isChecked={isDone} onClick={onClickCheck} />
      <span className={isDone ? 'checked' : ''}>{item.value}</span>
      <DeleteIcon className="delete-icon" onClick={onClickDelete} />
    </div>
  );
}
