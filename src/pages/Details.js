import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom';

const API_KEY = 'd74c6725';

const ButtonBack = () => (
    <Route render={({ history}) => (
      <button
        type='button'
        onClick={() => { history.push('/') }}
      >
        Go Back
      </button>
    )} />
  )

export class Details extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = {
        movie: { }
    }

    fetchMovie({ id }) {
        fetch( `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}` )
        .then( res => res.json())
        .then( movie => {
            console.log('BUSCANDO DETALLE DE LA PELICULA', movie);
            this.setState({ movie })
        })
        .catch( e => e)
    }

    componentDidMount() {
        console.log('URL PARAMS',this.props);
        const { id } = this.props.match.params
        this.fetchMovie({ id })
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return (
            <div>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title} />
                <h3>{Actors}</h3>
                <p>Score: { Metascore }</p>
                <p>{Plot}</p>
                <ButtonBack />
            </div>
        )
    }
}