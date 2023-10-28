import type { Pokemon } from "@/models/pokemon";
import Image from "next/image";
import Link from "next/link";

export function Card({ id, name }: Pokemon) {
  return (
    <Link href={`/dashboard/${id}`}>
      <div className="w-sm h-sm overflow-hidden rounded border-2 border-valor-100 shadow-xl">
        <Image
          className="h-40 w-full object-cover"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          height={160}
          width={160}
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-center text-xl font-bold first-letter:capitalize">
            {name}
          </div>
        </div>
      </div>
    </Link>
  );
}
