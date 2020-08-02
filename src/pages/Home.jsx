import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import {
  Button
} from '@material-ui/core'

import {
  Link
} from 'react-router-dom'

const Home = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Button variant="contained" component={Link} to={"/about"}>About</Button>
    </header>
  );
}

export default Home;