import React, {Component} from 'react'
import { Movie } from './Movie'

export class MovieList extends Component {

    showResutls(movies) {
        return movies.map( movie => {
            return (
            <div>
                 <Movie key={movie.imdbID} Title={movie.Title} Year={movie.Year} Poster={movie.Poster} /> 
            </div>
            
            )
        });
    }

    render() {
        return (
          this.showResutls(this.props.movies)
        )
    }
}
