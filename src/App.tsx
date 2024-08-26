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
    setItems([...items, { value: inputValue, isDone: false }]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
          <List items={items} />
        </div>
      </div>
    </div>
  );
}
