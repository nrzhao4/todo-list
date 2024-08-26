import './Item.component.scss';

type ItemProps = {
  value: string;
  isDone: boolean;
};

export default function Button({ value, isDone }: ItemProps) {
  return (
    <div className="item">
      <input type="radio" />
      <span>{value}</span>
    </div>
  );
}
