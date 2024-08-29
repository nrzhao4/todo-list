import { ListItem } from '../../library/ListItem';
import Item from '../item/Item.component';
import './List.component.scss';

type ListProps = {
  items: ListItem[];
  onDeleteItem: (deletedItem: ListItem) => void;
  onCheckItem: (item: ListItem) => void;
};

export default function Button({
  items,
  onDeleteItem,
  onCheckItem,
}: ListProps) {
  const getNumberOfDoneItems = () => {
    return items.filter((item) => item.isDone).length;
  };

  return (
    <div className="list-container">
      <div className="list-header">
        <div>
          <span className="items-created-label">Tarefas criadas</span>
          <div className="number-badge">
            <span>{items.length}</span>
          </div>
        </div>
        <div>
          <span className="concluded-label">Concluídas</span>
          <div className="number-badge">
            <span>
              {getNumberOfDoneItems()} de {items.length}
            </span>
          </div>
        </div>
      </div>
      <div className="list-items">
        {items.map((item, index) => (
          <Item
            item={item}
            key={index}
            onClickDelete={() => onDeleteItem(item)}
            onClickCheck={() => onCheckItem(item)}
          />
        ))}
      </div>
    </div>
  );
}
