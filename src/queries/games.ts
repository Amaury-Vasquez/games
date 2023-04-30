import { fetchUrl } from '.';
import { GameInfo } from '@/interfaces';
import { GAMES_URL, POKEMON_IMAGES_BASE_URL } from '@/constants';
import { PokemonInfo } from '@/interfaces';
import { shuffle, randomInt } from '@/utils';

export async function queryGames(): Promise<GameInfo[]> {
  return fetchUrl(GAMES_URL);
}

export async function queryMemoryGame(
  shiny: boolean = false,
  limit: number,
  rangeStart: number,
  rangeEnd: number
): Promise<PokemonInfo[]> {
  const BASE_URL = `${POKEMON_IMAGES_BASE_URL}${shiny ? '/shiny' : ''}`;
  function createUniquePokes(): { url: string; pokemonId: number }[] {
    const pokes = new Set<{ url: string; pokemonId: number }>();
    while (pokes.size < limit / 2) {
      const pokemonId = randomInt(rangeStart, rangeEnd);
      pokes.add({ url: `${BASE_URL}/${pokemonId}.png`, pokemonId });
    }
    return Array.from(pokes);
  }
  const pokemons = createUniquePokes();

  const imgBlobs = await Promise.all(
    pokemons.map(
      async ({ url, pokemonId }) =>
        await fetch(url, {
          cache: 'default',
          credentials: 'omit',
          referrerPolicy: 'strict-origin-when-cross-origin',
        }).then(async (res) => {
          const blob = await res.blob();
          return { pokemonId, url: URL.createObjectURL(blob) };
        })
    )
  );

  return shuffle(imgBlobs.concat(imgBlobs));
}
