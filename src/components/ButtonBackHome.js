import React from 'react'
import { Route } from 'react-router-dom';

export const ButtonBackHome = () => (
    <Route render={({ history}) => (
      <button
        type='button'
        className='button is-info'
        onClick={() => { history.push('/') }}
      >
        Go HomePage
      </button>
    )} />
  ) 