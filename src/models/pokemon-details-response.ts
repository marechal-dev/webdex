/**
 * Essa é a tipagem dos dados recebidos na chamada da rota de Detalhes do Pokémon.
 */
export interface PokemonDetailsResponse {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Form[];
  game_indices: Index[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Mfe[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  past_types: PastType[];
}

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: Ability2;
}

interface Ability2 {
  name: string;
  url: string;
}

interface Form {
  name: string;
  url: string;
}

interface Index {
  game_index: number;
  version: Version;
}

interface Version {
  name: string;
  url: string;
}

interface HeldItem {
  item: Item;
  version_details: VersionDetail[];
}

interface Item {
  name: string;
  url: string;
}

interface VersionDetail {
  rarity: number;
  version: Version2;
}

interface Version2 {
  name: string;
  url: string;
}

interface Mfe {
  move: Move;
  version_group_details: VersionGroupDetail[];
}

interface Move {
  name: string;
  url: string;
}

interface VersionGroupDetail {
  level_learned_at: number;
  version_group: VersionGroup;
  move_learn_method: MoveLearnMethod;
}

interface VersionGroup {
  name: string;
  url: string;
}

interface MoveLearnMethod {
  name: string;
  url: string;
}

interface Species {
  name: string;
  url: string;
}

interface Sprites {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
  other: Other;
  versions: Versions;
}

interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
}

interface DreamWorld {
  front_default: string;
  front_female: any;
}

interface Home {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface OfficialArtwork {
  front_default: string;
}

interface Versions {
  "generation-i": GenerationI;
  "generation-ii": GenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": GenerationIv;
  "generation-v": GenerationV;
  "generation-vi": GenerationVi;
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

interface GenerationI {
  "red-blue": RedBlue;
  yellow: Yellow;
}

interface RedBlue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

interface Yellow {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

interface Crystal {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Silver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface GenerationIii {
  emerald: Emerald;
  "firered-leafgreen": FireredLeafgreen;
  "ruby-sapphire": RubySapphire;
}

interface Emerald {
  front_default: string;
  front_shiny: string;
}

interface FireredLeafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface RubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface GenerationIv {
  "diamond-pearl": DiamondPearl;
  "heartgold-soulsilver": HeartgoldSoulsilver;
  platinum: Platinum;
}

interface DiamondPearl {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface HeartgoldSoulsilver {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface Platinum {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface GenerationV {
  "black-white": BlackWhite;
}

interface BlackWhite {
  animated: Animated;
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface Animated {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface GenerationVi {
  "omegaruby-alphasapphire": OmegarubyAlphasapphire;
  "x-y": XY;
}

interface OmegarubyAlphasapphire {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface XY {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface GenerationVii {
  icons: Icons;
  "ultra-sun-ultra-moon": UltraSunUltraMoon;
}

interface Icons {
  front_default: string;
  front_female: any;
}

interface UltraSunUltraMoon {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

interface GenerationViii {
  icons: Icons2;
}

interface Icons2 {
  front_default: string;
  front_female: any;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

interface Stat2 {
  name: string;
  url: string;
}

interface Type {
  slot: number;
  type: Type2;
}

interface Type2 {
  name: string;
  url: string;
}

interface PastType {
  generation: Generation;
  types: Type3[];
}

interface Generation {
  name: string;
  url: string;
}

interface Type3 {
  slot: number;
  type: Type4;
}

interface Type4 {
  name: string;
  url: string;
}
