import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { Title } from './components/Title';
import { SearchForm } from './components/searchForm';

class App extends Component {
  state = {
    results: []
  }

  handleResults = (results) => {
    console.log('RESULTS IN APP', results);
    this.setState({ results });
  }

  showResutls() {
    const { results } = this.state;
    return results.map( movie => {
      return (
        <div key={movie.imdbID}> 
          <p>{movie.Title}</p>
          <p> {movie.Year }</p>
        </div>
        
      )
    });
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
          : this.showResutls()
      }
    </div>
   );
 }
}

export default App;
