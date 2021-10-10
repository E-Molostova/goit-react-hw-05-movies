import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { mainRoutes } from '../../routes/mainRoutes';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import { MainContainer } from './MainStyled';

const Main = () => {
  return (
    <MainContainer>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/movie/:movieId">{MovieDetailsPage}</Route>
          {mainRoutes.map(route => (
            <Route exact={route.exact} path={route.path} component={route.component} />
          ))}
        </Switch>
      </Suspense>
    </MainContainer>
  );
};

export default Main;
