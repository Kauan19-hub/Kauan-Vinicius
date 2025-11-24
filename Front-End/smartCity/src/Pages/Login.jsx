import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import api from "../services/api";

const schemaLogin = z.object({
    username: z.string().trim().min(1, 'Digite seu usuário'),
    password: z.string().trim().min(1, 'Digite sua senha'),
});

export function Login() {
    const navigate = useNavigate();
    const [authError, setAuthError] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schemaLogin),
    });

    const usernameValue = watch("username");
    const passwordValue = watch("password");

    async function sendData(data) {
        try {
            const res = await api.post("/token/", {
                username: data.username,
                password: data.password
            });

            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);

            console.log("Login efetuado:", res.data);
            console.log("Sistema em operação:", res.data);

            navigate("/inicial");

        } catch (err) {
            console.log(err);
            setAuthError("Usuário ou senha inválido");
        }
    }

    const buttonDisabled = !(usernameValue && passwordValue);

    return (
        <section className={style.container}>
            <form className={style.forms} onSubmit={handleSubmit(sendData)}>

                <div className={style.logoContainer}>
                    <img src="./src/assets/logo.png" alt="Logo" className={style.logo} />
                    <h2 className={style.title}>Digital City</h2>
                </div>

                <label htmlFor="usuario">Usuário:</label>
                <input id="usuario" type="text" placeholder="Digite seu usuário" {...register("username")} />

                {errors.username && (
                    <p className={style.error}>{errors.username.message}</p>
                )}

                <label htmlFor="senha">Senha:</label>
                <input id="senha" type="password" placeholder="Digite sua senha" {...register("password")} />

                {errors.password && (
                    <p className={style.error}>{errors.password.message}</p>
                )}

                {authError && (
                    <p className={style.error}>{authError}</p>
                )}

                <button className={style.button} disabled={buttonDisabled}>Entrar</button>
            </form>
        </section>
    );
}
