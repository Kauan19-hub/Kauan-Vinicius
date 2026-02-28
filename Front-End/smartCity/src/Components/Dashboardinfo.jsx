// Componente tabela de dados com HTML semântico
import style from "../Components/Dashboardinfo.module.css";

export default function Dashboardinfo() {
    return (
        <section className={style.container}>
            <article className={style.body}>

                <header>
                    <h2 className={style.title}>
                        Informações do Projeto
                    </h2>
                </header>

                <table className={style.table}>
                    <tbody>

                        <tr>
                            <td className={style.users}>Usuários ativos:</td>
                            <td className={style.number}>1</td>
                        </tr>

                        <tr>
                            <td className={style.users}>Registros atuais:</td>
                            <td className={style.number}>1</td>
                        </tr>

                        <tr>
                            <td className={style.users}>Status do projeto:</td>
                            <td className={style.approved}>Aprovado</td>
                        </tr>

                    </tbody>
                </table>

            </article>
        </section>
    );
}
