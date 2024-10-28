import { ReactComponent as Clipboard } from '../../assets/clipboard.svg';
import { ListItem } from '../../library/ListItem';

import Item from '../item/Item.component';
import './List.component.scss';

type ListProps = {
  itemsNotDone: ListItem[];
  itemsDone: ListItem[];
  onDeleteItemNotDone: (index: number) => void;
  onDeleteItemDone: (index: number) => void;
  onCheckItem: (index: number) => void;
  onUncheckItem: (index: number) => void;
};

export default function Button({
  itemsNotDone,
  itemsDone,
  onDeleteItemNotDone,
  onDeleteItemDone,
  onCheckItem,
  onUncheckItem,
}: ListProps) {
  const getNumberOfTotalItems = () => {
    return itemsDone.length + itemsNotDone.length;
  };

  return (
    <div className="list-container">
      <div className="list-header">
        <div>
          <span className="items-created-label">Tarefas criadas</span>
          <div className="number-badge">
            <span>{getNumberOfTotalItems()}</span>
          </div>
        </div>
        <div>
          <span className="concluded-label">Concluídas</span>
          <div className="number-badge">
            <span>
              {itemsDone.length} de {getNumberOfTotalItems()}
            </span>
          </div>
        </div>
      </div>
      {getNumberOfTotalItems() === 0 ? (
        <div className="empty-list-message">
          <Clipboard />
          <h3>Você ainda não tem tarefas cadastradas</h3>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        <div className="list-items">
          {itemsNotDone.map((item, index) => (
            <Item
              item={item}
              isDone={false}
              key={index}
              onClickDelete={() => onDeleteItemNotDone(index)}
              onClickCheck={() => onCheckItem(index)}
            />
          ))}
          {itemsDone.map((item, index) => (
            <Item
              item={item}
              isDone={true}
              key={index}
              onClickDelete={() => onDeleteItemDone(index)}
              onClickCheck={() => onUncheckItem(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
