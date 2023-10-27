"use client";

import { Card } from "@/components/Card";
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
      <div className="flex justify-center">
        <div className="grid grid-cols-6  gap-4 gap-x-8 p-8">
          {pokemons.map((pokemon, index) => (
            <Card
              id={pokemon.id}
              name={pokemon.name}
              url={pokemon.url}
              key={pokemon.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
