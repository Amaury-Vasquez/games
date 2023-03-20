type RequestMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RequestCache =
  | 'default'
  | 'no-store'
  | 'reload'
  | 'no-cache'
  | 'force-cache'
  | 'only-if-cached';
type RequestCors = 'cors' | 'no-cors' | 'same-origin';
type RequestCredentials = 'omit' | 'same-origin' | 'include';
type RequestRedirect = 'follow' | 'error' | 'manual';
type ReferrerPolicy =
  | 'no-referrer'
  | '*no-referrer-when-downgrade'
  | 'origin'
  | 'origin-when-cross-origin'
  | 'same-origin'
  | 'strict-origin'
  | 'strict-origin-when-cross-origin';

export interface RequestOptions {
  method: RequestMethods;
  mode: RequestCors;
  credentials: RequestCredentials;
  redirect: RequestRedirect;
  headers: HeadersInit;
  body?: BodyInit | null;
  cache: RequestCache;
  refferrerPolicy: ReferrerPolicy;
}
