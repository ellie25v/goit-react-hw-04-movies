import React, { Component } from "react";
import Loader from "react-loader-spinner";
import services from "../services";

export default class Reviews extends Component {
  state = {
    results: [],
    isLoading: false,
    error: null
  };

  componentDidMount() {
    const id = this.props.location.state.id
    services
      .getMovieReviews(id)
      .then(({ data }) => {
        this.setState({ results: data.results });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { results, error, isLoading } = this.state;
    return (
      <div>
        {error && <p>Something went wrong: {error.message}</p>}
        {isLoading && (
          <Loader type="ThreeDots" color="blue" height={50} width={100} />
        )}
        {results.length ? (
          <ul>
            {results.map(author => (
              <li key={author.id}>
                <p>Author: {author.author}</p>
                <p>{author.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews found</p>
        )}
      </div>
    );
  }
}
