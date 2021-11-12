import React, { Suspense } from 'react';
import Header from '../header/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import { mainRoutes } from '../../routes/mainRoutes';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route path="/movie/:movieId">{MovieDetailsPage}</Route>
            {mainRoutes.map(route => (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
            <Route render={() => <h1>Page not found</h1>} path={'/not-found'} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
