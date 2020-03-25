import React, { Component } from 'react';
import Loader from "react-loader-spinner";
import services from '../services'
import styles from './cast.module.css'

export default class Cast extends Component {
    state = {
      cast: [],
      isLoading: false,
      error: null
    };
  
    componentDidMount() {
      this.setState({ isLoading: true });
      const id = this.props.location.state.id
      services
        .getMovieCast(id)
        .then(({ data }) => {
          this.setState({ cast: data.cast });
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  
    render() {
      const { cast, error, isLoading } = this.state;
      return (
        <div>
          {error && <p>Something went wrong: {error.message}</p>}
          {isLoading && (
            <Loader type="ThreeDots" color="blue" height={50} width={100} />
          )}
          <ul className={styles.list}>
            {cast.map(cast => (
              <li
                className={styles.listItem}
                key={cast.cast_id}
                // name="scroll-to-element"
              >
                <div className={styles.actorCard}>
                  <p className={styles.character}>Character:</p>
                  <p className={styles.characterName}>{cast.character}</p>
                  <div className={styles.imageBox}>
                    <img
                      src={
                        cast.profile_path
                          ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                          : "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/name-2135195744._CB466677935_.png"
                      }
                      alt={cast.name}
                    />
                  </div>
  
                  <p className={styles.name}>{cast.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }