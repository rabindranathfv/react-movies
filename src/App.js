import './App.css';
import 'bulma/css/bulma.css';
import { Title } from './components/Title';
import { SearchForm } from './components/searchForm';

function App() {
  return (
    <div className="App">
      <Title>Search Movies </Title>
      <div className="searchForm-wrapper">
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
