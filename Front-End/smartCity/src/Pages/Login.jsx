import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

const schemaLogin = z.object({
    username: z.string()
        .trim()
        .min(1, 'IDigite o seu usuário')
        .max(25, 'Máximo de 5 caracteres'),

    password: z.string()
        .trim()
        .min(1, 'Digite a sua senha')
        .max(15, 'Máximo de 3 caracteres'),
});

export function Login() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schemaLogin),
    });

    function sendData(data) {
        console.log("Login realizado:", data);
        navigate("/inicial");
    }

    return (
        <section className={style.container}>
            <form className={style.forms} onSubmit={handleSubmit(sendData)}>

                <h2 className={style.title}>Acesso ao Sistema</h2>

         
                <label htmlFor="usuario">Usuário:</label>
                <input id="usuario" type="text" placeholder="Digite seu usuário" {...register("username")}/>

                {errors.username && (
                    <p className={estilo.erro}>{errors.username.message}</p>
                )}

                <label htmlFor="senha">Senha:</label>
                <input id="senha" type="password" placeholder="Digite sua senha" {...register("password")} />

                {errors.password && (
                    <p className={estilo.erro}>{errors.password.message}</p>
                )}

                <button className={style.button}>Entrar</button>

            </form>
        </section>
    );
}
