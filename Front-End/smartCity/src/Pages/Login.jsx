// Importes necessários
import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import api from "../services/api";

const schemaLogin = z.object({
    username: z.string().trim().min(1),
    password: z.string().trim().min(1)
    
});

export function Login() {
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    
    const {
        register,
        handleSubmit,
        watch,
    } = useForm({
        resolver: zodResolver(schemaLogin),
        mode: "onChange"
    });

    // Validação de nome de usuário e senha, também registrados no Back-End e guardado no SQLite
    const usernameValue = watch("username");
    const passwordValue = watch("password");

    async function sendData(data) {
        try {
            const res = await api.post("/token/", {
                username: data.username,
                password: data.password
            });

            // Alert de login realizado
            setMessage({ type: "success", text: "Login realizado" })

            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);

            setTimeout(() => {
                navigate("/inicial");
            }, 1500);

        } catch (err) {
            setMessage({ type: "error", text: "Usuário ou senha inválido"})

            setTimeout(() => {
            }, 1500);
 
        }
    }

    // Botão de login desativado enquanto não fizer o login. Possui uma aparência de desativado com psicologia das cores 
    const buttonDisabled = !(usernameValue && passwordValue);

    return (
        <section className={style.container}>
            <form className={style.forms} onSubmit={handleSubmit(sendData)}>

                <header className={style.logoContainer}>
                    <img src="./src/assets/logo.webp" alt="Logo" className={style.logo} />
                    <h2 className={style.title}>Digital City</h2>
                </header>

                <input id="usuario" type="text" placeholder="Usuário" {...register("username")} />
                <input id="senha" type="password" placeholder="Senha" {...register("password")} />

                {message && (
                    <p className={
                        message.type === "error"
                            ? style.error
                             : style.success
                    }>
                        {message.text}
                    </p>
                )}

                {/* O botão de fato com o comando adicionado nele */}
                <button className={style.buttonLogin} disabled={buttonDisabled}>Entrar</button>
            </form>
        </section>
    );
}