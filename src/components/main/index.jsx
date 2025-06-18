import "./index.css";
import { useEffect, useState } from "react";
import { getTopNews } from "../../pages/details";
import Header from "../header";

export default function Main() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    async function fetchNoticias() {
      try {
        const data = await getTopNews(); // espera a resposta da API
        setNoticias(data);               // só executa depois que a resposta chega
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    }

    fetchNoticias();
  }, []);

  return (
    <>
      <Header setNoticias={setNoticias} />
      <main className="news-container">
        <h1 className="news-title">Notícias em Destaque</h1>

        <div className="news-grid">
          {noticias.map((noticia, index) => (
            <div className="news-card" key={index}>
              <h2>{noticia.title}</h2>
              <p>{noticia.description}</p>
              <a href={noticia.url} target="_blank" rel="noopener noreferrer">
                Leia mais
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
