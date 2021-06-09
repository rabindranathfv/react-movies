import React, { Component } from 'react';

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
        alert(this.state.inputMovie)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons">
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
