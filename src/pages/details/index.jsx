import axios from "axios";

const API_KEY = "74c0a6ac96db8463b8f0ae3adf5d09f5";

//  Criação da instância do axios com baseURL e parâmetros padrão
const api = axios.create({
  baseURL: "https://gnews.io/api/v4", // Endereço base da API
  params: {
    token: API_KEY, // Autenticação
    lang: "pt", // Idioma das notícias
    country: "br", // País (Brasil)
    max: 10, // Número máximo de notícias por requisição
  },
});

//  Função assíncrona que faz a requisição
export const getTopNews = async () => {
  const response = await api.get("/top-headlines");
  return response.data.articles; // retorna apenas os artigos
};

export const searchNews = async (query) => {
  const response = await api.get("/search", {
    params: {
      q: query,
    },
  });
  return response.data.articles;
};
