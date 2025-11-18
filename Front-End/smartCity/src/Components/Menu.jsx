import style from './Menu.module.css';
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    
    <nav className={style.menuFlex}>
      <a href="#" className={style.menuItem}>Início</a>
      <a href="#" className={style.menuItem}>Ambientes</a>
      <a href="#" className={style.menuItem}>Sensores</a>
      <a href="#" className={style.menuItem}>Histórico</a>
    </nav>

  );
}
