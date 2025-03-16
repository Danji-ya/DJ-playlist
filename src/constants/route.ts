import customLazy from '@utils/customLazy';
import { PATH } from './path';

const Main = customLazy(() => import('@pages/MainPage'));
const Search = customLazy(() => import('@pages/SearchPage'));
const Notfound = customLazy(() => import('@pages/NotFoundPage'));

export const ROUTE = [
  { path: PATH.MAIN, Component: Main, auth: false },
  { path: PATH.SEARCH, Component: Search, auth: false },
  { path: PATH.NOT_FOUND, Component: Notfound, auth: false },
];
