import './TextInput.component.scss';

type TextInputProps = {
  placeholder?: string;
  value: string;
  onValueChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextInput({
  placeholder,
  value,
  onValueChange,
}: TextInputProps) {
  return (
    <input
      className="text-input"
      type="text"
      value={value}
      onChange={onValueChange}
      placeholder={placeholder}
    />
  );
}
