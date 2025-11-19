import style from './Menu.module.css';
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    
    <nav className={style.menuFlex}>
      <Link to="/" className={style.menuItem}>Início</Link>
      <Link to="/" className={style.menuItem}>Ambientes</Link>
      <Link to="/" className={style.menuItem}>Sensores</Link>
      <Link to="/" className={style.menuItem}>Histórico</Link>
    </nav>

  );
}
