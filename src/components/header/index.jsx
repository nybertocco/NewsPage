import "./index.css";
import { useState } from "react";
import { searchNews } from "../../pages/details";

export default function Header({ setNoticias }) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [busca, setBusca] = useState("");

  const handleBuscar = async () => {
    if (busca.trim() === "") return;
    try {
      const resultados = await searchNews(busca);
      setNoticias(resultados); // envia para o componente pai
    } catch (error) {
      console.error("Erro na busca:", error);
    }
  };

  return (
    <header>
      <span className="logo">Portal NB</span>
      <input
        type="text"
        placeholder="Buscar notícias"
        className="search"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <button className="btn-search" onClick={handleBuscar}>
        Buscar
      </button>
      <button className="login" onClick={() => setMostrarModal(true)}>
        Login
      </button>

      {mostrarModal && (
        <div className="modal-back">
          <div className="modal">
            <button className="close" onClick={() => setMostrarModal(false)}>
              X
            </button>
            <h3>Faça seu login!</h3>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Senha" required />
              <button className="submit" type="submit">
                Entrar
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
