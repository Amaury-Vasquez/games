export interface GameImg {
  url: string;
  alt: string;
  height: number;
  width: number;
}

export interface GameInfo {
  name: string;
  description: string;
  img: GameImg;
  path: string;
}

export interface PokemonRegion {
  start: number;
  end: number;
  name: string;
}

export interface PokemonInfo {
  pokemonId: number;
  url: Blob;
}

export interface PokemonCardInfo {
  pokemonId: number;
  image: string;
  isFlipped: boolean;
  isFlipping: boolean;
  isMatched: boolean;
  index: number;
}
