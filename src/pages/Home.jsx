import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import { Link } from 'react-router-dom'

import {
  Button
} from '@material-ui/core'

const Home = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}

export default Home;