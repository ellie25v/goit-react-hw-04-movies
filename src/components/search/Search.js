import React, { Component } from "react";
import styles from './search.module.css'

export default class Search extends Component {
  state = {
    input: ""
  };

  

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.input);
    this.setState({
      input: ""
    });
  };

  render() {
    const { input } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        className={styles.input}
          type="text"
          value={input}
          placeholder="Search movies..."
          onChange={this.handleChange}
        />
        <button className={styles.btn} onClick={this.handleSubmit}>Search</button>
      </form>
    );
  }
}