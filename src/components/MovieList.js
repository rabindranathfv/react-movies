import React, {Component} from 'react'
import { Movie } from './Movie'

export class MovieList extends Component {

    showResutls(movies) {
        return movies.map( movie => {
            return (
            <div key={movie.imdbID}>
                 <Movie movie={movie}/> 
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