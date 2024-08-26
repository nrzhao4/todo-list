import { ListItem } from '../../library/Item';
import Item from '../item/Item.component';
import './List.component.scss';

type ListProps = {
  items: ListItem[];
};

export default function Button({ items }: ListProps) {
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
        </div>
      </div>
      <div className="list-items">
        {items.map((item, index) => (
          <Item value={item.value} isDone={item.isDone} key={index} />
        ))}
      </div>
    </div>
  );
}
