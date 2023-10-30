import type { Pokemon } from "@/models/pokemon";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Este é o componente que renderiza um Card de Pokémon na página Dashboard.
 *
 * @param {Pokemon} props Pokemon data
 * @param {string} props.id
 * @param {string} props.name
 *
 * @returns {ReactNode}
 */
export function Card({ id, name }: Pokemon) {
  return (
    <Link href={`/dashboard/${id}`}>
      <div className="h-sm w-sm overflow-hidden rounded border-2 border-valor-100 px-6 py-4 shadow-xl">
        <Image
          className="mb-2 h-40 w-full"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          height={160}
          width={160}
        />
        <div className="mb-2 flex items-center justify-center">
          <p className="text-center text-xl font-bold first-letter:capitalize">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
}
