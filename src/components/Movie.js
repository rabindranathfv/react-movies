import React, {Component} from 'react'

export class Movie extends Component {
    render() {
        const { movie } = this.props;
        console.log('movie in Movie component', movie);
        return (
            <p key={movie.imdbID}>{movie.Title}-{movie.Year}</p>
        )
    }
}