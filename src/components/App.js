import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import MoviesDetailsPage from './pages/MovieDetailsPage'
import MoviesPage from './pages/MoviesPage'
import Nav from './nav/Nav'
import { Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <>
    <Nav />
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path="/movies/:movieId" component={MoviesDetailsPage}/>
      <Route path='/movies' component={MoviesPage}/>
      <Redirect to='/' />
    </Switch>
    </>
  );
}

export default App;
