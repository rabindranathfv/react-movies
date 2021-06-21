import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class Movie extends Component {
    static propType = {
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string
    }
    render() {
        const { Poster, Year, Title  } = this.props;
        console.log('movie in Movie component', this.props);
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image">
                        <img src={Poster} alt={Title} />
                    </figure>
                </div>

                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{Title}</p>
                            <p className="subtitle is-6">{Year}</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}