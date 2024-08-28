import { useState } from 'react';
import './App.scss';
import Button from './components/button/Button.component';
import Header from './components/header/Header.component';
import List from './components/list/List.component';
import TextInput from './components/text-input/TextInput.component';
import { ListItem } from './library/Item';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState<ListItem[]>([]);

  const onClickCreate = () => {
    console.log('click create', inputValue);
    setInputValue('');
    setItems([{ value: inputValue, isDone: false }, ...items]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const deleteItem = (deletedItem: ListItem) => {
    console.log('delete item', deletedItem);
    const newItems = items.filter((item) => item.value !== deletedItem.value);
    setItems(newItems);
  };

  const checkItem = (checkedItem: ListItem) => {
    const newItems = items.filter((item) => item.value !== checkedItem.value);

    newItems.push({ value: checkedItem.value, isDone: !checkedItem.isDone });

    console.log('newitems: ', newItems);
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
