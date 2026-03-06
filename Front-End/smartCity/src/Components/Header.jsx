// Componente Header com HTML semântico
import style from './header.module.css';
import logo from '../assets/logo.webp';

export function Header() {
    return(
        <header className={style.header}>
            <img src={logo} alt="Digital City Logo" className={style.logo}/>
            <h1 className={style.title}>Digital City</h1>
        </header>
    );
}