import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import services from '../services'
import Loader from "react-loader-spinner";
import Search from '../search/Search'
import queryString from 'query-string'

class MoviesPage extends Component {
    state = {
        movies: [],
        isLoading: false,
        error: null
      };
      componentDidMount() {
        console.log('this.props', this.props)
        const { location } = this.props;
          console.log('this.props.location.search', this.props.location.search)
        let parseSearchQuery = queryString.parse(location.search).query;
        console.log('parseSearchQuery', parseSearchQuery)
      
         if(parseSearchQuery){

          services
          .getMovieQuery(parseSearchQuery)
           .then(({ data }) => {
              this.setState({ movies: data.results });
            })
          

        }
      }

    onSearch = query => {
        this.props.history.push({
          ...this.props.location,
          search: `query=${query}`
        });
        this.setState({ isLoading: true });
        services
          .getMovieQuery(query)
          .then(({ data }) => {
            this.setState({ movies: data.results });
          })
          .catch(error => this.setState({ error }))
          .finally(() => this.setState({ isLoading: false }));
      };
    
    render() {
        const { movies, error, isLoading } = this.state;
        const { location } = this.props;
        console.log("mov", movies)
        console.log("loc", location)
        return (
          <div>
            <Search onSearch={this.onSearch} />
            {error && <p>Something went wrong: {error.message}</p>}
            {isLoading && (
              <Loader type="ThreeDots" color="blue"/>
            )}
            <ul>
              {movies.map(movie => (
                <li key={movie.id}>+
                  <Link
                    to={{
                      pathname: `/movies/${movie.id}`,
                      state: { id: movie.id,
                    from: location }
                    }}
                  >
                    {movie.title || movie.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
    
    }
}

export default MoviesPage;