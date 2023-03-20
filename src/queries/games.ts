import { fetchUrl } from '.';
import { GameInfo } from '@/interfaces';
import { GAMES_URL } from '@/constants';

export async function queryGames() {
  return fetchUrl(GAMES_URL);
}
