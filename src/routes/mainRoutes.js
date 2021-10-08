import { lazy } from 'react';

export const mainRoutes = [
  {
    name: 'Home',
    path: '/',
    component: lazy(() => import('../pages/Homepage' /* webpackChunkName: "HomePage" */)),
    exact: true,
  },
  {
    name: 'Movies',
    path: '/movies',
    component: lazy(() => import('../pages/MoviesPage' /* webpackChunkName: "MoviesPage" */)),
    exact: false,
  },
];
