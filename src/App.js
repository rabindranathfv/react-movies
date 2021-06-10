import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { Title } from './components/Title';
import { SearchForm } from './components/searchForm';

class App extends Component {
  state = {
    results: []
  }

 render () {
   return (
    <div className="App">
      <Title>Search Movies </Title>
      <div className="searchForm-wrapper">
        <SearchForm />
      </div>
      {
        this.state.results.length === 0
          ? <p> sin Resultados</p> 
          : <p> con Resultados</p> 
      }
    </div>
   );
 }
}

export default App;
