/**
 * Essa é a tipagem dos dados que são recebidos via chamada da PokéAPI na rota de
 * Geração 1.
 */
export interface GenerationPokemonResponse {
  abilities: any[];
  id: number;
  main_region: MainRegion;
  moves: Mfe[];
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecie[];
  types: Type[];
  version_groups: VersionGroup[];
}

export interface MainRegion {
  name: string;
  url: string;
}

export interface Mfe {
  name: string;
  url: string;
}

export interface Name {
  language: Language;
  name: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface PokemonSpecie {
  name: string;
  url: string;
}

export interface Type {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}
