"use client";

import { Header } from "@/components/Header";
import { GenerationPokemonResponse } from "@/models/generation-pokemon-response";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [pokemons, setPokemons] = useState<GenerationPokemonResponse[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/generation/1");
      const pokemons = await response.json();

      const mappedPokemons: GenerationPokemonResponse[] =
        pokemons.pokemon_species.map((item: any) => {
          const [_, idToParse] = item.url.split(
            "https://pokeapi.co/api/v2/pokemon-species/",
          );

          const id = Number(idToParse.replace("/", ""));

          return {
            id,
            name: item.name,
            url: item.url,
          };
        });

      setPokemons(mappedPokemons);
    };

    fetchPokemons();
  }, []);

  return (
    <main className="flex h-screen w-screen flex-col">
      <Header />
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={pokemon.id}>
            <Image
              alt={`Imagem do ${pokemon.name}`}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              height={150}
              width={150}
            />
            {pokemon.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
