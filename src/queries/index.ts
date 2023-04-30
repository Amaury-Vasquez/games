import { RequestOptions } from '@/interfaces';

const defaultOptions: RequestOptions = {
  method: 'GET',
  mode: 'cors',
  credentials: 'omit',
  redirect: 'follow',
  headers: {
    'Content-Type': 'application/json',
  },
  cache: 'default',
  referrerPolicy: 'no-referrer',
};

export async function fetchUrl(
  url: string,
  options: RequestOptions = { ...defaultOptions }
) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export { queryGames, queryMemoryGame } from './games';
