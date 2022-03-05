import { lazy } from 'react';
import { PATH } from './path';

const Main = lazy(() => import('../pages/MainPage'));
const Search = lazy(() => import('../pages/SearchPage'));
const Notfound = lazy(() => import('../pages/NotFoundPage'));

const ROUTE = [
  { path: PATH.MAIN, Component: Main, auth: false },
  { path: PATH.SEARCH, Component: Search, auth: false },
  { path: PATH.NOT_FOUND, Component: Notfound, auth: false },
];

export { ROUTE };
