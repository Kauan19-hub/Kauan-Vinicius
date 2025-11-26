import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import style from "../Pages/Inicial.module.css";
import Dashboardinfo from "../Components/Dashboardinfo";
import '../../src/index.css'

export default function Inicial() {

  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/sensor/");
      const data = await response.json();
      setDados(Array.isArray(data) ? data : data.results || []);

    } catch (err) {
      setError("Erro ao buscar dados");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.painel}>

    <Dashboardinfo/>

      <main style={{ flex: 1 }}>
        <button onClick={handleClick} className={style.btn}>Carregar Dados</button>

        {loading && <p className={style.error}>Carregando...</p>}
        {error && <p className={style.error}>{error}</p>}

          <div className={style.cardsContainer}>
          {dados.map((item, index) => (
            <div className={style.card} key={index}>
              
              <h3 className={style.sensor}>Sensor {item.idSensor}</h3>

              <p>
                <strong>Tipo:</strong>{" "}
                <span className={style.colorSpan}>
                  {item.tipoSensor}
                </span>
              </p>

              <p>
                <strong>Identificação:</strong>{" "}
                <span className={style.colorSpan}>
                    {item.identifSensor}
                </span>
              </p>

              <p>
                <strong>Unidade:</strong>{" "}
                <span className={style.colorSpan}>
                  {item.unidadeMedSensor}
                </span>
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span className={style.colorSpan2}>
                  {item.statusSensor}
                </span>
              </p>
 
              <p>
                <strong>Ambiente:</strong>{" "}
                <span className={style.colorSpan}>
                  {item.nome || "N/A"}
                </span>
              </p>

              <p>
                <strong>Local:</strong>{" "}
                <span className={style.colorSpan}>
                  {item.nome || "N/A"}
                </span>
              </p>

              <p>
                <strong>Responsável:</strong>{" "}
                <span  className={style.colorSpan}>
                  {item.nome || "N/A"}
                </span>
              </p>

              <p>
                <strong>Latitude:</strong>{" "}
                <span  className={style.colorSpan}>
                  {item.latitudeSensor ?? "N/A"}
                </span>
              </p>

              <p>
                <strong>Longitude:</strong>{" "}
                <span  className={style.colorSpan}>
                  {item.longitudeSensor ?? "N/A"}
                </span>
              </p>

              <p>
                <strong>Registrado em:</strong>{" "}
                <span  className={style.colorSpan}>
                 {item.timestampSensor}
                </span>
              </p>
            </div>
        ))}

            <Link to="/" className={style.back}>Voltar</Link> 
          </div>
      </main>

      <Footer/>
    </div>
  );
}
