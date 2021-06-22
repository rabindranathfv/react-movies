import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonBackHome } from '../components/ButtonBackHome';

export class NotFound extends Component {
    render() {
        return (
            <div>
                <p> NOT FOUND 404 </p>
                <ButtonBackHome />
            </div>
        )
    }
}