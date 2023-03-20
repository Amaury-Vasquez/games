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
