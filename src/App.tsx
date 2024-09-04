import { useState } from 'react';
import './App.scss';
import Button from './components/button/Button.component';
import Header from './components/header/Header.component';
import List from './components/list/List.component';
import TextInput from './components/text-input/TextInput.component';
import { ListItem } from './library/ListItem';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState<ListItem[]>([]);

  const onClickCreate = () => {
    setInputValue('');
    const newItem = {
      id: new Date().getTime(),
      value: inputValue,
      isDone: false,
    };
    const newItemsArr = insertNewItem(newItem);
    setItems(newItemsArr);
  };

  const insertNewItem = (newItem: ListItem) => {
    const currentItems = items;
    const insertIndex = currentItems.findIndex((item) => item.isDone);

    if (insertIndex === -1) {
      return [...currentItems, newItem];
    }

    return [
      ...currentItems.slice(0, insertIndex),
      newItem,
      ...currentItems.slice(insertIndex),
    ];
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const deleteItem = (deletedItem: ListItem) => {
    const newItems = items.filter((item) => item.id !== deletedItem.id);
    setItems(newItems);
  };

  const checkItem = (checkedItem: ListItem) => {
    const newItems = items.filter((item) => item.id !== checkedItem.id);
    newItems.push({
      id: checkedItem.id,
      value: checkedItem.value,
      isDone: !checkedItem.isDone,
    });
    setItems(newItems);
  };

  return (
    <div>
      <Header />
      <div className="body">
        <div className="body-container">
          <div className="create-item-container">
            <TextInput
              placeholder="Adicione uma nova tarefa"
              onValueChange={handleInputChange}
              value={inputValue}
              onEnterPress={onClickCreate}
            />
            <Button
              text="Criar"
              onClick={onClickCreate}
              isDisabled={inputValue.length === 0}
            />
          </div>
          <List
            items={items}
            onDeleteItem={deleteItem}
            onCheckItem={checkItem}
          />
        </div>
      </div>
    </div>
  );
}
