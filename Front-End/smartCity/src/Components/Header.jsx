import style from './Header.module.css';
import logo_removed_bg from '../assets/logo.png';

export function Header() {
    return(
        <header className={style.header}>
            <img src={logo_removed_bg} alt="Digital City Logo " className={style.logo}/>
            <h1 className={style.title}>Digital City</h1>
        </header>
    );
}