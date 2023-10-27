import { GenerationPokemonResponse } from "@/models/generation-pokemon-response";

export function Card({ id, name, url }: GenerationPokemonResponse) {
  return (
    <div className="w-sm h-sm overflow-hidden rounded border-2 border-valor-100 shadow-xl">
      <img
        className="h-40 w-full object-cover"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-center text-xl font-bold">{name}</div>
      </div>
    </div>
  );
}
