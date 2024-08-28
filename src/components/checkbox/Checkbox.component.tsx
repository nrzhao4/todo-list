import './Checkbox.component.scss';

type CheckboxProps = {
  isChecked: boolean;
  onClick: () => void;
};

export default function Button({ isChecked, onClick }: CheckboxProps) {
  return (
    <div className="container">
      <input type="checkbox" defaultChecked={isChecked} />
      <span className="checkmark" onClick={onClick}></span>
    </div>
  );
}
