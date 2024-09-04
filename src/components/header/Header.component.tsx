import { ReactComponent as Logo } from '../../assets/logo.svg';
import './Header.component.scss';

export default function Header() {
  return (
    <div className="header-container">
      <Logo className="logo" />
    </div>
  );
}
