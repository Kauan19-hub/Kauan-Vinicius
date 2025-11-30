// Importes necessários
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

import style from "../Pages/Inicial.module.css";
import Dashboardinfo from "../Components/Dashboardinfo";
import '../../src/index.css';

// Funçaõ default para importação
export default function Inicial() {

  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // Card maior ao clicar no botão do card menor
  const openModal = (item) => {
    setSelectedItem(item);
  };

  // Fecha o card maior
  const closeModal = (item) => {
    setSelectedItem(null);
  };


  const handleClick = async () => {
    setLoading(true);
    setError(null);

    try {
      // Conexão com o Back-End e erro ao buscar os dados de lá
      const response = await fetch("http://127.0.0.1:8000/api/sensor/");
      const data = await response.json();
      setDados(Array.isArray(data) ? data : data.results || []);

    } catch (err) {
      setError("Erro ao buscar dados");

    } finally {
      setLoading(false);
    }
  };

  // Interface HTML semântico
  return (
    <section className={style.painel}>

    {/* Importe da tabela de informações */}
    <Dashboardinfo/>

      <main style={{ flex: 1 }}>
        <button onClick={handleClick} className={style.btn}>Carregar Dados</button>

        {loading && <p className={style.error}>Carregando...</p>}
        {error && <p className={style.error}>{error}</p>}

          <section className={style.cardsContainer}>

          {dados.map((item, index) => (
            <article className={style.card} key={index}>
              
              <h2 className={style.sensor}>Sensor {item.idSensor}</h2>

              {/* Cards com informações definidas no Back-End sendo chamadas no Front-End */}
              <p>
                <strong>Tipo:</strong>{" "}
                <span className={style.colorSpan}>
                  {item.tipoSensor}
                </span>
              </p>

              <p>
                <strong>Identificação:</strong>{""}
                <span className={style.colorSpan}>
                    {item.identifSensor}
                </span>
              </p>

              <p>
                <strong>Umidade:</strong>{" "}
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
                  {item.ambiente_nome || "N/A"}
                </span>
              </p>

              <p>
                <strong>Local:</strong>{" "}
                <span className={style.colorSpan}>
                  {item.local_nome || "N/A"}
                </span>
              </p>

              <p>
                <strong>Responsável:</strong>{" "}
                <span  className={style.colorSpan}>
                  {item.responsavel_nome || "N/A"}
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

              {/* Botão do card maior */}
              <button className={style.buttonCard} onClick={() => openModal(item)}>
                Ver mais
              </button>
            </article>
        ))}

            {/* Voltar para a tela de login */}
            <Link to="/" className={style.back}>Voltar</Link>

          </section>
      </main>

      {/* Modal */}
      {selectedItem && (
        <section className={style.modalOverlay} onClick={closeModal}>
          <article className={style.modal} onClick={(e) => e.stopPropagation()}>
            <h2>Sensor {selectedItem.idSensor}</h2>

             <p>
                <strong>Tipo:</strong>{" "}
                <span className={style.colorSpan}>
                  {selectedItem.tipoSensor}
                </span>
              </p>

              <p>
                <strong>Identificação:</strong>{" "}
                <span className={style.colorSpan}>
                    {selectedItem.identifSensor}
                </span>
              </p>

              <p>
                <strong>Umidade:</strong>{" "}
                <span className={style.colorSpan}>
                  {selectedItem.unidadeMedSensor}
                </span>
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span className={style.colorSpan2}>
                  {selectedItem.statusSensor}
                </span>
              </p>
 
              <p>
                <strong>Ambiente:</strong>{" "}
                <span className={style.colorSpan}>
                  {selectedItem.ambiente_nome || "N/A"}
                </span>
              </p>

              <p>
                <strong>Local:</strong>{" "}
                <span className={style.colorSpan}>
                  {selectedItem.local_nome || "N/A"}
                </span>
              </p>

              <p>
                <strong>Responsável:</strong>{" "}
                <span  className={style.colorSpan}>
                  {selectedItem.responsavel_nome || "N/A"}
                </span>
              </p>

              <p>
                <strong>Latitude:</strong>{" "}
                <span  className={style.colorSpan}>
                  {selectedItem.latitudeSensor ?? "N/A"}
                </span>
              </p>

              <p>
                <strong>Longitude:</strong>{" "}
                <span  className={style.colorSpan}>
                  {selectedItem.longitudeSensor ?? "N/A"}
                </span>
              </p>

              <p>
                <strong>Registrado em:</strong>{" "}
                <span  className={style.colorSpan}>
                 {selectedItem.timestampSensor}
                </span>
              </p>

              {/* Fechar o card maior */}
              <button className={style.buttonCard} onClick={() => closeModal(selectedItem)}>
                Fechar
              </button>
        </article>
      </section>

      )}

      {/* Importação da Footer */}
      <Footer/>
    </section>
  );
}