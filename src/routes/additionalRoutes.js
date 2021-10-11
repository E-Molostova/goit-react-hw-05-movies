import { lazy } from 'react';

export const additionalRoutes = [
  {
    name: 'Cast',
    path: '/cast',
    component: lazy(() => import('../Components/cast/Cast' /* webpackChunkName: "CastPage" */)),
    exact: true,
  },
  {
    name: 'Reviews',
    path: '/reviews',
    component: lazy(() =>
      import('../Components/reviews/Reviews' /* webpackChunkName: "ReviewsPage" */),
    ),
    exact: false,
  },
];
