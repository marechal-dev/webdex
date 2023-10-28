import { Header } from "@/components/Header";
import { PokeApiService } from "@/services/poke-api-service";

interface IPokemonDetailsParams {
  params: {
    id: number;
  };
}

const fetchPokemonDetails = async (id: number) => {
  const pokemonDetails = await PokeApiService.getPokemonDetailsByID(id);

  return pokemonDetails.data;
};

export default async function PokemonDetails({
  params,
}: IPokemonDetailsParams) {
  const pokemon = await fetchPokemonDetails(params.id);

  return (
    <main className="h-screen w-full">
      <Header />
      <div className="flex justify-center">
        <div className="grid grid-cols-6  gap-4 gap-x-8 p-8">
          {pokemon.name}
        </div>
      </div>
    </main>
  );
}
