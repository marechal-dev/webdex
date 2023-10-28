import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { PokeApiService } from "@/services/poke-api-service";

const fetchFirstGenerationPokemons = async () => {
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
};

export default async function Dashboard() {
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
