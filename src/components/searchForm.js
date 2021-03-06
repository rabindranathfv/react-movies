import React, { Component } from 'react';

const API_KEY = 'd74c6725';
export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    handleChange = (event) => {
        this.setState({
            inputMovie: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { inputMovie } = this.state;
        fetch( `http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}` )
            .then( res => res.json())
            .then( movies => {
                console.log(movies);
                const { Search = [] , totalResults = '0'  } = movies;
                this.props.onResults(Search);
            })
            .catch( e => e)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons mb-5">
                    <div className="control">
                        <input className="input" type="text" 
                        placeholder="Movie search"
                        onChange={this.handleChange} />
                    </div>
                    <div className="control">
                        <button className="button is-info"> Search</button>
                    </div>
                </div>
            </form>
        )
    }
}
