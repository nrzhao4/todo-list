import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { ListItem } from '../../library/Item';
import Checkbox from '../checkbox/Checkbox.component';
import './Item.component.scss';

type ItemProps = {
  item: ListItem;
  onClickDelete: () => void;
  onClickCheck: () => void;
};

export default function Button({
  item,
  onClickDelete,
  onClickCheck,
}: ItemProps) {
  return (
    <div className="item">
      <Checkbox isChecked={item.isDone} onClick={onClickCheck} />
      <span className={item.isDone ? 'checked' : ''}>{item.value}</span>
      <DeleteIcon className="delete-icon" onClick={onClickDelete} />
    </div>
  );
}
