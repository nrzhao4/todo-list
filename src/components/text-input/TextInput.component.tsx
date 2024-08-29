import './TextInput.component.scss';

type TextInputProps = {
  placeholder?: string;
  value: string;
  onValueChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterPress?: () => void;
};

export default function TextInput({
  placeholder,
  value,
  onValueChange,
  onEnterPress,
}: TextInputProps) {
  const onKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onEnterPress && onEnterPress();
    }
  };

  return (
    <input
      className="text-input"
      type="text"
      value={value}
      onChange={onValueChange}
      placeholder={placeholder}
      onKeyDown={onKeydown}
    />
  );
}
