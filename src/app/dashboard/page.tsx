import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import type { Pokemon } from "@/models/pokemon";
import { PokeApiService } from "@/services/poke-api-service";

/**
 * Essa função realiza a chamada para a PokéAPI no endpoint do recurso da
 * Primeira Geração de Pokémons. Além disso, também realiza o mapeamento dos dados
 * recebidos para uma estrutura de dados mais simples, refletindo apenas as necessidades
 * dessa tela
 *
 * @returns {Promise<Pokemon[]>} The array of Pokémon data
 */
async function fetchFirstGenerationPokemons(): Promise<Pokemon[]> {
  const generation = await PokeApiService.getFirstGeneration();

  const mappedPokemons = generation.data.pokemon_species.map((item) => {
    const urlSeparator = "https://pokeapi.co/api/v2/pokemon-species/";
    const [_, idToParse] = item.url.split(urlSeparator);

    const id = Number(idToParse.replace("/", ""));

    return {
      id,
      name: item.name,
      url: item.url,
    };
  });

  return mappedPokemons;
}

/**
 * Esse é o componente da tela de Pokémons. Ele contém a estrutura da página em
 * formato JSX.
 *
 * @returns {Promise<JSX.Element>}
 */
export default async function Dashboard(): Promise<JSX.Element> {
  const pokemons = await fetchFirstGenerationPokemons();

  return (
    <main className="h-screen w-full">
      <Header />
      <div className="flex justify-center">
        <div className="grid grid-cols-6  gap-4 gap-x-8 p-8">
          {pokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
