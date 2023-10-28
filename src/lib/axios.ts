import axios from "axios";

/**
 * Essa constante global é utilizada para inicializar o cliente Axios que irá
 * realizar as requisições.
 *
 * Axios é uma biblioteca JavaScript criada para facilitar a realização de chamadas
 * HTTP, abstraindo os diferentes verbos HTTP em métodos da instância do Axios.
 *
 * O parâmetro `baseURL` indica qual URL deve ser utilizada em todas requisições
 * dessa instância.
 */
export const pokeApiAxiosClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
