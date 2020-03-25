import React, { Component } from "react";
import {Link} from 'react-router-dom'
import services from "../services";
import Loader from "react-loader-spinner";

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    services
      .getMovies()
      .then(({ data }) => {
        this.setState({ movies: data.results });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }
  render() {
    const { movies, isLoading, error } = this.state;
    return (
      <>
        <h2>Trending today</h2>
        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && (
          <Loader type="ThreeDots" color="blue" />
        )}
        <ul>
            { movies.length && 
                movies.map(movie => <li key={movie.id}><Link to={{
                    pathname: `movies/${movie.id}`,
                    state: {
                      id: movie.id
                    }
                }} >
                    {movie.original_title || movie.name}</Link></li>)
            }
        </ul>
      </>
    );
  }
}

export default HomePage;