import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import NotFound from '../elements/NotFound/NotFound';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/udemy_React-Movie-App' component={Home} exact />
        <Route
          exact
          path='/udemy_React-Movie-App/:movieId'
          component={Movie}
          exact
        />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
