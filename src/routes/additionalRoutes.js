import { lazy } from 'react';

export const additionalRoutes = [
  {
    name: 'Cast',
    path: '/cast',
    component: lazy(() => import('../pages/Cast' /* webpackChunkName: "CastPage" */)),
    exact: true,
  },
  {
    name: 'Reviews',
    path: '/reviews',
    component: lazy(() => import('../pages/Reviews' /* webpackChunkName: "ReviewsPage" */)),
    exact: false,
  },
];
