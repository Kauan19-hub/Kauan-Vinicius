// Componente Footer com HTML semântico
import style from './Footer.module.css';

const year = new Date().getFullYear()

export default function Footer() {
    return(
        <footer className={style.footer}>
             &copy; {year} Todos os direitos reservados
        </footer>
    );
}