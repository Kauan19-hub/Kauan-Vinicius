import { Header } from '../Components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import style from './Inicial.module.css';

export function Inicial() {
    return (
        <>
            <Header/>
                <main className={style.body}>
                    <Outlet/>
                </main> 
            <Footer/>
        </>
    );
}