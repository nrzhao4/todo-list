import './Button.component.scss';

type ButtonProps = {
  text: string;
  isDisabled: boolean;
  onClick: () => void;
};

export default function Button({ text, isDisabled, onClick }: ButtonProps) {
  return (
    <button className="button-primary" onClick={onClick} disabled={isDisabled}>
      {text}
    </button>
  );
}
