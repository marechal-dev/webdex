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
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl">{pokemon.name.toUpperCase()}</h1>

        <div className="grid h-4/6 w-4/6 grid-cols-2 grid-rows-2 gap-4">
          <div className="bg-gray-100 flex items-center justify-center  border border-black p-4">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="max-h-full max-w-full"
            />
          </div>
          <div className="bg-gray-200 border border-black p-4">
            <p>Região: {pokemon.name}</p>
            <p>XP Base: {pokemon.base_experience}</p>
          </div>
          <div className="bg-gray-300 border border-black p-4">
            <h2>Movimentos:</h2>
            <ul>
              {pokemon.abilities.map((move) => (
                <li key={move.ability.name}>{move.ability.name}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-400 border border-black p-4">
            {pokemon.types.map((type) => (
              <p key={type.type.name}>Tipo: {type.type.name}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
