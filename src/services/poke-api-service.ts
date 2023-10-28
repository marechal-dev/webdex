import { pokeApiAxiosClient } from "@/lib/axios";
import type { GenerationPokemonResponse } from "@/models/generation-pokemon-response";
import type { PokemonDetailsResponse } from "@/models/pokemon-details-response";
import type { AxiosInstance, AxiosResponse } from "axios";

/**
 * Essa classe estática é responsável por abstrair as chamadas HTTP para a
 * PokéAPI.
 *
 * @class PokeApiService
 * @static
 */
export class PokeApiService {
  /**
   * Propriedade estática que recebe o cliente Axios que será responsável por
   * realizar as requisições
   *
   * @member axiosClient
   * @private
   * @type {AxiosInstance}
   */
  private static axiosClient = pokeApiAxiosClient;

  /**
   * Método responsável por iniciar uma requisição HTTP para o endpoint `/generation/1`,
   * que retorna a lista de Pokémons da Primeira Geração (Red/Blue), dentre outros
   * dados.
   *
   * @method
   * @public
   * @static
   * @returns {Promise<AxiosResponse<GenerationPokemonResponse>>}
   */
  public static getFirstGeneration() {
    return this.axiosClient.get<GenerationPokemonResponse>("/generation/1");
  }

  /**
   * Método responsável por iniciar uma requisição HTTP para o endpoint `/pokemon/:id`,
   * que retorna os dados de um Pokémon específico baseado no parâmetro de URL `:id`.
   *
   * @method
   * @public
   * @static
   * @returns {Promise<AxiosResponse<PokemonDetailsResponse>>}
   */
  public static getPokemonDetailsByID(id: number) {
    return this.axiosClient.get<PokemonDetailsResponse>(`/pokemon/${id}`);
  }
}
