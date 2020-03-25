import React, { Component } from 'react';
import services from '../services'
import {Link, Switch, Route,} from 'react-router-dom'
import Cast from '../cast/Cast'
import Reviews from '../reviews/Reviews'
import styles from './pages.module.css'

class MovieDetailsPage extends Component {
    state = { 
        movie: {}
     }

    componentDidMount() {
        console.log("props", this.props)
        services.getMovieDetails(this.props.location.state.id)
        .then(data => 
            this.setState({movie: data.data}));
    }
    handleBack = () => {
        const { history, location } = this.props;
        if (location.state) {
          return history.push(location.state.from);
        }
        return history.push("/");
      };

    render() {
        console.log("mdp" , this.state.movie);
        // const movieID = this.props.location.state.id
        const {movie: {id, poster_path, title, name, vote_average, overview, genres = []}} = this.state;
        // const year = release_date.substr(0,4)
        // console.log("year", year)
        const imgUrl = `http://image.tmdb.org/t/p/w342/`;                                                                                                                                                                                                                          ;
        return (
           <>
            <button
                type="button"
                className={styles.button}
                onClick={this.handleBack}>
                    Go back</button>
            <div className={styles.details}>
                <img  src={`${imgUrl}` + `${poster_path}`} alt='img' />
                <div className={styles.detailsText}>
                <h2>{title || name}</h2>
                <p>User Score: <span>{Math.floor(vote_average/10*100)}%</span></p>
                <h4>Overview</h4>
                <p>{overview}</p>
                <h4>Genres</h4>
                <p>{genres.map(genre => <span>{genre.name}  </span>)}</p>
            </div>
            </div>
            <div className={styles.add}>
            <p>Additional info</p>

            <Link to={{pathname:`/movies/${id}/cast`, state: { id }}}><p>Cast</p></Link>
            <Link to={{pathname:`/movies/${id}/reviews`, state: { id }}}><p>Reviews</p></Link>

            <Switch> 
                <Route exact path={`/movies/${id}/cast`} component={Cast} />
                <Route exact path={`/movies/${id}/reviews`} component={Reviews} />
            </Switch>
            </div>
           </>
        );
    }
}
export default MovieDetailsPage;