import { useState } from 'react';
import './App.scss';
import Button from './components/button/Button.component';
import Header from './components/header/Header.component';
import List from './components/list/List.component';
import TextInput from './components/text-input/TextInput.component';
import { ListItem } from './library/ListItem';

export default function App() {
  const ITEMS_NOT_DONE_KEY = 'todo-list-items-not-done';
  const ITEMS_DONE_KEY = 'todo-list-items-done';

  const initItemsNotDone = () => {
    return localStorage.getItem(ITEMS_NOT_DONE_KEY)
      ? JSON.parse(localStorage.getItem(ITEMS_NOT_DONE_KEY)!)
      : [];
  };

  const initItemsDone = () => {
    return localStorage.getItem(ITEMS_DONE_KEY)
      ? JSON.parse(localStorage.getItem(ITEMS_DONE_KEY)!)
      : [];
  };

  const [inputValue, setInputValue] = useState('');
  const [itemsNotDone, setItemsNotDone] = useState<ListItem[]>(
    initItemsNotDone()
  );
  const [itemsDone, setItemsDone] = useState<ListItem[]>(initItemsDone());

  const onClickCreate = () => {
    setInputValue('');
    const currentItems = itemsNotDone;
    const newItem = {
      id: new Date().getTime(),
      value: inputValue,
      isDone: false,
    };
    setItemsNotDone([...currentItems, newItem]);
    saveItemsNotDoneToLocalStorage([...currentItems, newItem]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const deleteItemNotDone = (index: number) => {
    setItemsNotDone((prevItemsNotDone) => {
      const updatedItemsNotDone = [...prevItemsNotDone];
      updatedItemsNotDone.splice(index, 1);
      saveItemsNotDoneToLocalStorage(updatedItemsNotDone);
      return updatedItemsNotDone;
    });
  };

  const deleteItemDone = (index: number) => {
    setItemsDone((prevItemsDone) => {
      const updatedItemsDone = [...prevItemsDone];
      updatedItemsDone.splice(index, 1);
      saveItemsDoneToLocalStorage(updatedItemsDone);
      return updatedItemsDone;
    });
  };

  const checkItem = (index: number) => {
    setItemsNotDone((prevItemsNotDone) => {
      const updatedItemsNotDone = [...prevItemsNotDone];
      const [itemToMove] = updatedItemsNotDone.splice(index, 1);
      setItemsDone([...itemsDone, itemToMove]);

      saveItemsNotDoneToLocalStorage(updatedItemsNotDone);
      saveItemsDoneToLocalStorage([...itemsDone, itemToMove]);

      return updatedItemsNotDone;
    });
  };

  const unCheckItem = (index: number) => {
    setItemsDone((prevItemsDone) => {
      const updatedItemsDone = [...prevItemsDone];
      const [itemToMove] = updatedItemsDone.splice(index, 1);
      setItemsNotDone([...itemsNotDone, itemToMove]);

      saveItemsNotDoneToLocalStorage([...itemsNotDone, itemToMove]);
      saveItemsDoneToLocalStorage(updatedItemsDone);

      return updatedItemsDone;
    });
  };

  const saveItemsNotDoneToLocalStorage = (items: ListItem[]) => {
    localStorage.setItem(ITEMS_NOT_DONE_KEY, JSON.stringify(items));
  };

  const saveItemsDoneToLocalStorage = (items: ListItem[]) => {
    localStorage.setItem(ITEMS_DONE_KEY, JSON.stringify(items));
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
            itemsNotDone={itemsNotDone}
            itemsDone={itemsDone}
            onDeleteItemNotDone={deleteItemNotDone}
            onDeleteItemDone={deleteItemDone}
            onCheckItem={checkItem}
            onUncheckItem={unCheckItem}
          />
        </div>
      </div>
    </div>
  );
}
