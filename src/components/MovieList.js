import React, {Component} from 'react'
import { Movie } from './Movie'
import PropTypes from 'prop-types'

export class MovieList extends Component {
    static propTypes = {
        movies: PropTypes.any
    }

    showResults(movies) {
        return movies.map( movie => {
            return (
                <div key={movie.imdbID} className="MoviesList-item">
                    <Movie 
                        imdbID={movie.imdbID}
                        Title={movie.Title} 
                        Year={movie.Year} 
                        Poster={movie.Poster}
                        className="MoviesList-item"
                    /> 
                </div>
            )
        })
    }

    render() {
        const { movies } = this.props
        return (
            <div className="MoviesList">
                {
                    this.showResults(movies)
                }
            </div>
        )
    }
}
