import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col bg-pokemon-valley-landscape bg-cover">
      <Header />
      <div className="flex h-4/5 w-full flex-row items-center">
        <div className="flex w-3/5 flex-col">
          <h1 className="mb-3 text-center text-7xl font-bold italic">WebDex</h1>
          <p className="mb-4 text-center text-2xl font-semibold">
            Sua Pokédex #1 na Web!
          </p>
          <p className="text-center text-2xl text-black">
            Entre, explore e veja mais sobre seus Pokémons favoritos!
          </p>
        </div>
        <div className="w-2/5">
          <Image src="/pikachu.png" alt="Pikachu" height={500} width={500} />
        </div>
      </div>
    </main>
  );
}
