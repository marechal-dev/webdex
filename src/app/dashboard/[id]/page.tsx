import { Header } from "@/components/Header";
import { PokeApiService } from "@/services/poke-api-service";
import Image from "next/image";

const typeColors: Record<string, string> = {
  normal: "bg-gray-300 text-black",
  fire: "bg-red-500 text-white",
  water: "bg-blue-500 text-white",
  electric: "bg-yellow-400 text-black",
  grass: "bg-green-500 text-white",
  ice: "bg-blue-200 text-black",
  fighting: "bg-red-600 text-white",
  poison: "bg-purple-600 text-white",
  ground: "bg-yellow-700 text-white",
  flying: "bg-blue-300 text-black",
  psychic: "bg-pink-500 text-white",
  bug: "bg-green-600 text-white",
  rock: "bg-yellow-800 text-white",
  ghost: "bg-indigo-800 text-white",
  steel: "bg-gray-600 text-white",
  dragon: "bg-red-800 text-white",
  dark: "bg-gray-800 text-white",
  fairy: "bg-pink-200 text-black",
};

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
  const heightInMeters = pokemon.height / 3.281;
  const weightInKilos = pokemon.weight / 2.205;

  return (
    <main className="h-screen w-full">
      <Header />
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl font-bold first-letter:capitalize">
          {pokemon.name}
        </h1>

        <div className="grid h-4/6 w-4/6 grid-cols-2 grid-rows-2 gap-4">
          <div className="flex items-center justify-center border  border-black bg-gray-100 p-4">
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              width={300}
              height={300}
              className="max-h-full max-w-full"
            />
          </div>
          <div className="border border-black bg-gray-200 p-4">
            <h2 className="mb-1 font-bold italic">Informações Gerais:</h2>
            <p>Altura base: {heightInMeters.toFixed(2)}m</p>
            <p>Peso base: {weightInKilos.toFixed(2)}kg</p>
            <p>XP Base: {pokemon.base_experience}xp</p>
          </div>
          <div className="border border-black bg-gray-300 p-4">
            <h2 className="mb-1 font-bold italic">Movimentos:</h2>
            <ul>
              {pokemon.abilities.map((move) => (
                <li className="first-letter:capitalize" key={move.ability.name}>
                  {move.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-black bg-gray-400 p-4">
            <h2 className="mb-1 font-bold italic">Tipo(s):</h2>
            {pokemon.types.map((type) => {
              const typeColor =
                typeColors[type.type.name] || "bg-gray-300 text-black";

              return (
                <div className={`rounded-xl ${typeColor}`} key={type.type.name}>
                  <p className="mb-2 text-center first-letter:capitalize">
                    {type.type.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
