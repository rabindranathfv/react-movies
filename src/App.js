import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { Title } from './components/Title';
import { SearchForm } from './components/searchForm';
import { MovieList } from './components/MovieList'

class App extends Component {
  state = {
    results: []
  }

  handleResults = (results) => {
    console.log('RESULTS IN APP', results);
    this.setState({ results });
  }


 render () {
   return (
    <div className="App">
      <Title>Search Movies </Title>
      <div className="searchForm-wrapper">
        <SearchForm onResults={this.handleResults} />
      </div>
      {
        this.state.results.length === 0
          ? <p> sin Resultados</p> 
          : <MovieList movies={this.state.results} />
      }
    </div>
   );
 }
}

export default App;
