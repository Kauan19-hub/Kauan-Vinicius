import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../Pages/Inicial.module.css";

const Header = () => (
  <header style={{ padding: "10px", background: "#333", color: "#fff" }}>
    <h1>Meu Header</h1>
  </header>
);

const Footer = () => (
  <footer style={{ padding: "10px", background: "#333", color: "#fff", marginTop: "auto" }}>
    <p>Meu Footer</p>
  </footer>
);

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
      <Header />

      <main style={{ flex: 1 }}>
        <h1>Painel Inicial</h1>
        <button onClick={handleClick}>Carregar Dados</button>

        {loading && <p className={style.error}>Carregando...</p>}
        {error && <p className={style.error}>{error}</p>}

        <div className={style.cardsContainer}>
          {dados.map((item, index) => (
            <div className={style.card} key={index}>
              
              <h3>Sensor #{item.idSensor}</h3>
              <p><strong>Tipo:</strong> {item.tipoSensor}</p>
              <p><strong>Identificação:</strong> {item.identifSensor}</p>
              <p><strong>Unidade:</strong> {item.unidadeMedSensor}</p>

              <p><strong>Status:</strong> {item.statusSensor}</p>

              <p>
                <strong>Ambiente:</strong>{" "}
                <span style={{ color: item.ambienteSensor ? "#000" : "#999" }}>
                  {item.ambiente_nome || "N/A"}
                </span>
              </p>

              <p>
                <strong>Local:</strong>{" "}
                {item.local_nome || "N/A"}
              </p>

              <p>
                <strong>Responsável:</strong>{" "}
                {item.responsavel_nome || "N/A"}
              </p>

              <p><strong>Latitude:</strong> {item.latitudeSensor ?? "N/A"}</p>
              <p><strong>Longitude:</strong> {item.longitudeSensor ?? "N/A"}</p>

              <p><strong>Registrado em:</strong> {item.timestampSensor}</p>

              <Link to="/" className={style.back}></Link>
            </div>

            
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
